import { Metadata } from "./core/types";
import fs from 'fs';

export const metadata: Metadata = {
  name: "Minecraft THE Pokemon",
  serverIp: "minecraft-the-server.spot.gs",
  version: {
    minecraft: "1.21.1",
    modloader: {
      name: "neoforge",
      version: "21.1.228"
    }
  },
  include: [
    "defaultconfigs/**/*",
    "mods/**/*.jar",
    "shaderpacks/**/*"
  ]
}

// If is running as command line, write the metadata to a file
if (process.argv.includes('--write')) {
  fs.writeFileSync('metadata.json', JSON.stringify(metadata, null, 2) + '\n');
}
