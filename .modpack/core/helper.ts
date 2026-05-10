import crypto from 'crypto';
import fs from 'fs';

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
