import fs from "fs";
import path from "path";
import { lfsRegexesFromGitattributes } from "./core";

const gitattributesPath = path.join(__dirname, "..", ".gitattributes");

export const config = {
  name: "Minecraft THE Pokemon",
  serverIp: "minecraft-the-server.spot.gs",
  version: {
    minecraft: "1.21.1",
    modloader: {
      name: "neoforge",
      version: "21.1.228",
    },
  },
  /** Files to include in modpack */
  include: ["config/**/*", "defaultconfigs/**/*", "mods/**/*.jar", "shaderpacks/**/*"],
  /** Paths matching Git LFS rules from `.gitattributes` (`filter=lfs`) */
  lfs: lfsRegexesFromGitattributes(fs.readFileSync(gitattributesPath, "utf8")),
};
