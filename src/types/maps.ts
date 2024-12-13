export interface SavedLocation {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
}

export interface SearchResult {
  lat: number;
  lng: number;
  address: string;
}