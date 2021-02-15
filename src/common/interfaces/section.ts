import { Product } from "./product";

export interface Section {
  title: string;
  imageUrl: string;
  id: number;
  routeName: string;
  size?: "small" | "large";
  items: Product[];
}
