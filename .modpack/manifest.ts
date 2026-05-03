import fs from "fs";
import {globSync} from "glob";

import { Manifest, File, hashFile, hashString } from "./core";
import { config } from "./config";
import path from "path";

const files: File[] = globSync(config.include)
  .filter((file) => fs.statSync(file).isFile())
  .map((file) => {
    const lfs = config.lfs.some((regex) => regex.test(file));
    return {
      name: path.normalize(file).replaceAll(path.sep, path.posix.sep),
      lfs: lfs ? lfs : undefined,
      hash: hashFile(file),
    };
  });

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
