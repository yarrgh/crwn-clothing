import { Product } from "./product";

export interface IDirectory {
  title: string;
  imageUrl: string;
  id: number;
  routeName: string;
  size?: "small" | "large";
  items?: Product[];
}
