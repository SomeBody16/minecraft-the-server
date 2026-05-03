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
  include: ["defaultconfigs/**/*", "mods/**/*.jar", "shaderpacks/**/*"],
  lfs: [/\.jar$/],
};
