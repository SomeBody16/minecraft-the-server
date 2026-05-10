import fs from "fs";

import {
  Manifest,
  hashString,
} from "./core";
import config from "../config.json" with { type: "json" };
import { manifestFiles } from "./core";

const files = manifestFiles(config.include);

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
