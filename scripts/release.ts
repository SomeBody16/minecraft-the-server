import * as fs from 'fs/promises';
import * as path from 'path';
import SftpClient from 'ssh2-sftp-client';

import { ManifestServer } from '../.modpack/core/types';

/**
 * Synchronizes local files to a remote SFTP server based on manifest.json
 */
export async function synchronize(
  config: SftpClient.ConnectOptions,
  localDirPath: string,
  remoteDirPath: string,
) {
  const sftp = new SftpClient();

  try {
    console.log('Connecting to SFTP server...');
    await sftp.connect(config);
    console.log('Connected successfully.');

    const localManifestPath = path.join(localDirPath, 'manifest.server.json');
    // Using posix path to ensure forward slashes on remote servers (like Linux)
    const remoteManifestPath = path.posix.join(remoteDirPath, 'manifest.server.json');

    // 1. Read local manifest
    console.log('Reading local manifest.server.json...');
    const localManifestData = await fs.readFile(localManifestPath, 'utf8');
    const localManifest: ManifestServer = JSON.parse(localManifestData);

    // 2. Read remote manifest
    console.log('Reading remote manifest.server.json...');
    let remoteManifest: ManifestServer = { files: [] };
    try {
      const remoteManifestBuffer = (await sftp.get(remoteManifestPath)) as Buffer;
      remoteManifest = JSON.parse(remoteManifestBuffer.toString('utf8'));
    } catch (err) {
      console.log('Remote manifest.json not found or could not be read. Assuming empty remote state.');
    }

    // 3. Map the files for easy comparison
    const localMap = new Map<string, string>();
    for (const file of localManifest.files) {
      localMap.set(file.name, file.hash);
    }

    const remoteMap = new Map<string, string>();
    for (const file of remoteManifest.files) {
      remoteMap.set(file.name, file.hash);
    }

    // 4. Determine what needs to be uploaded or deleted
    const toUpload: string[] = [];
    const toDelete: string[] = [];

    // Find missing and changed files (in local, but not remote, or hash differs)
    for (const [name, hash] of localMap.entries()) {
      if (!remoteMap.has(name) || remoteMap.get(name) !== hash) {
        toUpload.push(name);
      }
    }

    // Find removed files (in remote, but no longer in local)
    for (const name of remoteMap.keys()) {
      if (!localMap.has(name)) {
        toDelete.push(name);
      }
    }

    // 5. Execute Deletions
    if (toDelete.length > 0) {
      console.log(`\nFound ${toDelete.length} files to delete...`);
      for (const fileName of toDelete) {
        const remoteFilePath = path.posix.join(remoteDirPath, fileName);
        console.log(`[DELETE] ${fileName}`);
        try {
          await sftp.delete(remoteFilePath);
        } catch (e) {
          console.warn(`Failed to delete ${fileName} on remote. It might not exist.`);
        }
      }
    }

    // 6. Execute Uploads
    if (toUpload.length > 0) {
      console.log(`\nFound ${toUpload.length} files to upload...`);
      for (const fileName of toUpload) {
        const localFilePath = path.join(localDirPath, fileName);

        const mappedFileName = fileName //
          .replace('defaultconfigs/', 'config/')
          .replace('serverconfigs/', 'config/')
        const remoteFilePath = path.posix.join(remoteDirPath, mappedFileName);

        // Ensure the remote directory exists before putting the file
        const remoteFileDir = path.posix.dirname(remoteFilePath);
        const dirExists = await sftp.exists(remoteFileDir);
        if (!dirExists) {
          await sftp.mkdir(remoteFileDir, true); // true enables recursive directory creation
        }

        console.log(`[UPLOAD] ${mappedFileName}`);
        await sftp.put(localFilePath, remoteFilePath);
      }
    }

    // 7. Update Remote Manifest
    if (toUpload.length > 0 || toDelete.length > 0 || remoteManifest.files.length === 0) {
      console.log('\nUpdating remote manifest.server.json...');
      const updatedManifestBuffer = Buffer.from(JSON.stringify(localManifest, null, 2));
      await sftp.put(updatedManifestBuffer, remoteManifestPath);
      console.log('Synchronization complete!');
    } else {
      console.log('\nEverything is up to date! No synchronization needed.');
    }
  } catch (error) {
    console.error('An error occurred during synchronization:', error);
  } finally {
    // 8. Clean up and close connection
    await sftp.end();
    console.log('Connection closed.');
  }
}

const sftpConfig: SftpClient.ConnectOptions = {
  host: process.env.SFTP_HOST!,
  port: parseInt(process.env.SFTP_PORT!, 10),
  username: process.env.SFTP_USER!,
  password: process.env.SFTP_PASS!,
};

const LOCAL_DIR = path.resolve(__dirname, '..');
const REMOTE_DIR = '';

console.log('Deploying to SFTP server...');
console.log('Local directory:', LOCAL_DIR);

synchronize(sftpConfig, LOCAL_DIR, REMOTE_DIR);
