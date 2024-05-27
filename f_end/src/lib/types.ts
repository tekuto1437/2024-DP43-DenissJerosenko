export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  description_short: string;
  isFeaturing: boolean;
  available: boolean;
  sizes: string[];
  quantity: number;
  size: string;
}

export interface Category {
  id: number;
  name: string;
  products: Product[];
}

