export interface Spot {
  id: string,
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  link: string;
}

export interface Activity {
  link: string;
  phoneNumber: string;
  type: ActivityType;
  events: ActivityEvent[];
  email: string;
  spot: Spot;
  name: string;
}

export interface ActivityType {
  name: string
}

export interface ActivityEvent {
  start: string
  end: string
}

export interface Location {
  name: string,
  latitude: string,
  longitude: string
}

