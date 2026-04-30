import fs from "fs";
import {globSync} from "glob";

import { metadata } from "./metadata";
import { Manifest, File, hashFile, hashString } from "./core";

const files: File[] = globSync(metadata.include)
  .filter((file) => fs.statSync(file).isFile())
  .map((file) => ({
    name: file,
    size: fs.statSync(file).size,
    hash: hashFile(file),
  }))

export const manifest: Manifest = {
  version: hashString(JSON.stringify(metadata)),
  files,
}

// If is running as command line, write the manifest to a file
if (process.argv.includes('--write')) {
  fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2) + '\n');
}
