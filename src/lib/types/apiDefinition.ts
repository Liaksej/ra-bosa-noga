export interface CatalogItemApiInterface {
  id: number;
  category: number;
  title: string;
  price: number;
  images: string[];
}

export interface CatalogCategoryApiInterface {
  id: number;
  title: string;
}

export interface CartItemInterface {
  id: number;
  quantity: number;
  size: string;
  price: number;
  title: string;
}
