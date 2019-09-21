export interface Spot {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}
export interface Activity {
  name: string;
  spot: Spot;
  description: string;
}
export interface Location {
  name: string;
  latitude: number;
  longitude: number;
}
