import {ICartItem} from '../../services/storage/cart/dto/cart-item.dto';

export type CartState = {
  cartItems: ICartItem[];
  totalCount: number;
  totalAmount: number;
};
