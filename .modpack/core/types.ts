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
  hash: string;
  size: number;
  lfs: boolean | undefined;
  optional: boolean | undefined;
};
