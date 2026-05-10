import fs from 'fs';

import config from '../config.json' with { type: 'json' };
import { hashString, Manifest, ManifestServer, manifestServerFiles } from './core';
import { manifestFiles } from './core';

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

export const manifestServer: ManifestServer = {
  files: manifestServerFiles([...config.include, 'server.properties']),
};

fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2) + '\n');
fs.writeFileSync('manifest.server.json', JSON.stringify(manifestServer, null, 2) + '\n');
