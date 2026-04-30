export type Metadata = {
  name: string;
  serverIp: string;
  version: {
    minecraft: string;
    modloader: {
      name: string;
      version: string;
    }
  }
  include: string[];
}

export type File = {
  name: string;
  size: number;
  hash: string;
}

export type Manifest = {
  version: string;
  files: File[];
}
