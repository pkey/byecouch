export interface MapProps {
  center: { lat: number; lng: number };
  zoom: number;
  markers?: IMarker[];
}

export interface IMarker {
  lat: string;
  lng: string;
  activityTitle: string;
  id?: number;
}

export interface ISpot {
  id: string;
  name: string;
  address: string;
  latitude: string;
  longitude: string;
  link: string;
}
export interface ICategory {
  id: string;
  name: string;
  color: string;
}

export interface ICategorySelected {
    id: string;
    name: string;
    color: string;
    isSelected: boolean;
  }

export interface IActivity {
  id: number;
  name: string;
  photo: string;
  rating: number;
  ratingCount: number;
  price: number;
  maxPeople: number;
  link: string;
  category: ICategory;
  spot: ISpot;
}
