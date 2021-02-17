import { Product } from "./product";

export interface IDirectory {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: "small" | "large";
  items?: Product[];
}
