import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import AdmZip from 'adm-zip';
import * as toml from "js-toml";

export function hashString(data: string) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

export function hashFile(path: string) {
  try {
    const fileBuffer = fs.readFileSync(path);
    return crypto.createHash('sha256').update(fileBuffer).digest('hex');
  } catch (error) {
    console.error(`Error hashing file ${path}:`, error);
    throw error;
  }
}

export function getFileStatsNormalized(filePath: string) {
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

export function getFileId(filePath: string) {
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
