export interface Spot {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  link: string;
}

export interface Activity {
  id: number;
  photo: string;
  description: string;
  rating: number;
  ratingCount: number;
  price: number;
  maxPeople: number;
  link: string;
  phoneNumber: string;
  category: ActivityCategory;
  events: string[];
  email: string;
  spot: Spot;
  name: string;
}

export interface ActivityCategory {
  id: number;
  name: string;
  color: string;
}

export interface ActivityEvent {
  start: string;
  end: string;
  busy: boolean;
  day: string;
}

export interface Location {
  name: string;
  latitude: string;
  longitude: string;
}
