export interface Book {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  price: number;
  stock: number;
  description: Description[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}

interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null | string;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null | string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: Providermetadata;
}

interface Providermetadata {
  public_id: string;
  resource_type: string;
}

interface Description {
  type: string;
  children: Child[];
}

interface Child {
  text: string;
  type: string;
}