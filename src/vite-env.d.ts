/// <reference types="vite/client" />

interface RestaurantAttributes {
  _id: string | null;
  name: string;
  rating: number;
  review_count: number;
}

interface PreferenceEntry {
  restaurant_id1: number;
  rating1: number;
  reviews1: number;
  restaurant_id2: number;
  rating2: number;
  reviews2: number;
  preference: number;
}
