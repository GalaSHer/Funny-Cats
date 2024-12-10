export type TProduct = {
  _id: string;
  mimetype: string;
  size: number;
  tags: string[];
  url: string;
  isLiked: boolean;
};

export type ApiResponse = { payload: TProduct[] } | { error: string } ;

export type TProductsState = {
  products: TProduct[];
  loadingProducts: boolean;
  error: string | null;
};