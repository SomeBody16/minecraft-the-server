import fs from "fs";
import { globSync } from "glob";
import crypto from 'crypto';

import { File } from "./types";
import path from "path";
import AdmZip from "adm-zip";
import * as toml from "js-toml";

export const manifestFiles = (include: string[]): File[] => {
  return globSync(include)
    .filter((file) => fs.statSync(file).isFile())
    .filter((file) => !file.endsWith(".disabled"))
    .map((file) => {
      const stats = getFileStatsNormalized(file);
      const name = path.normalize(file).replaceAll(path.sep, path.posix.sep);
      return {
        id: getFileId(file),
        name,
        url: githubRawFileDownloadUrl({ name }),
        hash: stats.hash,
        size: stats.size,
        optional: file.includes(".optional.") ? true : undefined,
      };
    })
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
};


function getFileId(filePath: string) {
  const defaultId = path.basename(filePath);
  if (!filePath.endsWith(".jar")) {
    return defaultId;
  }

  try {
    const jar = new AdmZip(filePath);
    const metadata: any = toml.load(jar.readAsText("META-INF/neoforge.mods.toml"));
    return metadata.mods[0].modId || defaultId;
  } catch (error) {
    console.log(`Error getting file id for ${filePath}`);
    return defaultId;
  }
}

/**
 * Stable URL whose GET follows redirects to the real object bytes.
 * Uses github.com/.../raw/... so Git LFS files download as media, unlike raw.githubusercontent.com (pointer text).
 */
function githubRawFileDownloadUrl(options: {
  name: string;
}): string {
  const repo = process.env.GITHUB_REPOSITORY!;
  const ref = process.env.GITHUB_REF_NAME!;
  const encodedRef = encodeGithubPathSegments(ref);
  const encodedFile = encodeGithubPathSegments(options.name);
  return `https://github.com/${repo}/raw/${encodedRef}/${encodedFile}`;
}

/**
 * Encodes a Git ref or repo-relative path for use in GitHub URLs (one encodeURIComponent per slash-separated segment).
 */
function encodeGithubPathSegments(relPath: string): string {
  return relPath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function getFileStatsNormalized(filePath: string) {
  let fileBuffer = fs.readFileSync(filePath);

  // Check if it's a known text file based on extension
  const isTextFile = /\.(json|jsonc|json5|yml|yaml|js|ts|txt|ini|toml|properties|xml|md)$/i.test(filePath);

  if (isTextFile) {
    // Convert buffer to string, remove all Windows \r characters, convert back to buffer
    const normalizedContent = fileBuffer.toString("utf8").replace(/\r\n/g, "\n");
    fileBuffer = Buffer.from(normalizedContent, "utf8");
  }

  return {
    hash: crypto.createHash("sha256").update(fileBuffer).digest("hex"),
    size: fileBuffer.length,
  };
}
