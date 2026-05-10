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
  id: string;
  name: string;
  url: string;
  hash: string;
  size: number;
  optional: boolean | undefined;
};
