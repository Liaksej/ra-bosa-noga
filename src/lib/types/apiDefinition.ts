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
