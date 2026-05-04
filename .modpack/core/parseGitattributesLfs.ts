/**
 * Build RegExp[] for paths tracked by Git LFS from `.gitattributes` content.
 * Only lines that set `filter=lfs` are considered (same criterion as `git check-attr`).
 */

const RE_ESC = /[\\^$.*+?()[\]{}|]/g;

function escapeRe(c: string): string {
  return c.replace(RE_ESC, "\\$&");
}

/** Gitignore-style glob segment → regex (POSIX `/` paths). */
function globToRegExpSource(glob: string): string {
  let i = 0;
  let out = "";
  while (i < glob.length) {
    const c = glob[i];
    if (c === "\\" && i + 1 < glob.length) {
      out += escapeRe(glob[i + 1]!);
      i += 2;
      continue;
    }
    if (c === "*" && glob[i + 1] === "*") {
      i += 2;
      if (glob[i] === "/") {
        i++;
        out += "(?:.*/)?";
      } else {
        out += ".*";
      }
      continue;
    }
    if (c === "*") {
      i++;
      out += "[^/]*";
      continue;
    }
    if (c === "?") {
      i++;
      out += "[^/]";
      continue;
    }
    if (c === "[") {
      const close = glob.indexOf("]", i + 1);
      if (close === -1) {
        out += "\\[";
        i++;
        continue;
      }
      out += glob.slice(i, close + 1);
      i = close + 1;
      continue;
    }
    out += escapeRe(c);
    i++;
  }
  return out;
}

function patternToRegExpSource(pattern: string): string {
  let p = pattern.trim();
  if (p.endsWith("/")) {
    p = p.slice(0, -1);
  }
  if (!p.includes("/")) {
    p = `**/${p}`;
  }
  return globToRegExpSource(p);
}

function lineHasFilterLfs(attrs: string[]): boolean {
  return attrs.includes("filter=lfs");
}

/** Exported for tests / reuse; reads UTF-8 file body. */
export function lfsRegexesFromGitattributes(content: string): RegExp[] {
  const regexes: RegExp[] = [];
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#") || line.startsWith("[")) {
      continue;
    }
    const parts = line.split(/\s+/).filter(Boolean);
    if (parts.length < 2) {
      continue;
    }
    const pattern = parts[0]!;
    const attrs = parts.slice(1);
    if (!lineHasFilterLfs(attrs)) {
      continue;
    }
    try {
      regexes.push(new RegExp(`^${patternToRegExpSource(pattern)}$`));
    } catch {
      /* invalid pattern — skip */
    }
  }
  return regexes;
}
