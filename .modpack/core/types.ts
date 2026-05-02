export type Manifest = {
  name: string;
  serverIp: string;
  version: {
    modpack: string;
    minecraft: string;
    modloader: {
      name: string;
      version: string;
    };
  };
  files: File[];
};

export type File = {
  name: string;
  size: number;
  hash: string;
};
