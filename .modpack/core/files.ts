import crypto from 'crypto';
import fs from 'fs';
import { globSync } from 'glob';

import AdmZip from 'adm-zip';
import * as toml from 'js-toml';
import path from 'path';
import { File, ServerFile } from './types';

export const manifestFiles = (include: string[]): File[] => {
  return globSync(include)
    .filter((file) => fs.statSync(file).isFile())
    .filter((file) => !file.endsWith('.disabled'))
    .filter((file) => !file.includes('.server.'))
    .map((file) => {
      const stats = getFileStatsNormalized(file);
      const { id, name, displayName } = getFileMetadata(file);
      return {
        id,
        name,
        displayName,
        url: githubRawFileDownloadUrl({ name }),
        hash: stats.hash,
        size: stats.size,
        optional: file.includes('.client.') ? true : undefined,
      };
    })
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
};

export const manifestServerFiles = (include: string[]): ServerFile[] => {
  return globSync(include)
    .filter((file) => fs.statSync(file).isFile())
    .filter((file) => !file.endsWith('.disabled'))
    .filter((file) => !file.includes('.client.'))
    .filter((file) => !file.includes('resourcepacks'))
    .filter((file) => !file.includes('shaderpacks'))
    .map((file) => {
      const stats = getFileStatsNormalized(file);
      const { id, name } = getFileMetadata(file);
      return {
        id,
        hash: stats.hash,
        name,
      };
    })
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
};

function getFileMetadata(filePath: string): { id: string; name: string; displayName: string } {
  const defaultData = {
    id: path.basename(filePath),
    name: path.normalize(filePath).replaceAll(path.sep, path.posix.sep),
    displayName: path.basename(filePath),
  };

  if (!filePath.endsWith('.jar')) {
    return defaultData;
  }

  try {
    const jar = new AdmZip(filePath);
    const metadata: any = toml.load(jar.readAsText('META-INF/neoforge.mods.toml'));
    return {
      id: metadata?.mods?.[0]?.modId || defaultData.id,
      name: defaultData.name,
      displayName: metadata?.mods?.[0]?.displayName || defaultData.displayName,
    };
  } catch (error) {
    console.log(`Error getting file id for ${filePath}`);
    return defaultData;
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
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}

function getFileStatsNormalized(filePath: string) {
  let fileBuffer = fs.readFileSync(filePath);

  // Check if it's a known text file based on extension
  const isTextFile = /\.(json|jsonc|json5|yml|yaml|js|ts|txt|ini|toml|properties|xml|md|cfg)$/i.test(filePath);

  if (isTextFile) {
    // Convert buffer to string, remove all Windows \r characters, convert back to buffer
    const normalizedContent = fileBuffer.toString('utf8').replace(/\r\n/g, '\n');
    fileBuffer = Buffer.from(normalizedContent, 'utf8');
  }

  return {
    hash: crypto.createHash('sha256').update(fileBuffer).digest('hex'),
    size: fileBuffer.length,
  };
}
