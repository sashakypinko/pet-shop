import { IProduct } from '../../services/api/product/dto/product.dto';

export type ProductsState = {
  products: IProduct[];
  selectedProduct: IProduct | null;
  loading: boolean;
  error: any;
};
