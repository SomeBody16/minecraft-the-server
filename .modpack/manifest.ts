import fs from "fs";
import {globSync} from "glob";

import { Manifest, File, hashString, getFileStatsNormalized, getFileId } from "./core";
import { config } from "./config";
import path from "path";

const files: File[] = globSync(config.include)
  .filter((file) => fs.statSync(file).isFile())
  .filter((file) => !file.endsWith(".disabled"))
  .map((file) => {
    const lfs = config.lfs.some((regex) => regex.test(file));
    const stats = getFileStatsNormalized(file);
    return {
      id: getFileId(file),
      name: path.normalize(file).replaceAll(path.sep, path.posix.sep),
      hash: stats.hash,
      size: stats.size,
      lfs: lfs ? lfs : undefined,
      optional: file.includes(".optional.") ? true : undefined,
    };
  })
  .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

export const manifest: Manifest = {
  name: config.name,
  serverIp: config.serverIp,
  version: {
    modpack: hashString(JSON.stringify(files)),
    minecraft: config.version.minecraft,
    modloader: config.version.modloader,
  },
  files,
};

// If is running as command line, write the manifest to a file
if (process.argv.includes("--write")) {
  fs.writeFileSync("manifest.json", JSON.stringify(manifest, null, 2) + "\n");
} else {
  console.log(JSON.stringify(manifest, null, 2));
}
