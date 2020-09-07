export interface GetAlbumResponse {
  href: string;
  items: Album[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}

export interface Album {
  album_group: string;
  album_type: string;
  artists: Artist[];
  external_urls: string;
  href: string;
  id: string;
  images: ImageInfo[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
  available_markets: string[];
}

export interface Artist {
  external_urls: string;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ImageInfo {
  height: number;
  width: number;
  url: string;
}
