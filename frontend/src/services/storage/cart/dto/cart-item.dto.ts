import {IProduct} from '../../../api/product/dto/product.dto';

export interface ICartItem {
  product: IProduct;
  count: number;
}
