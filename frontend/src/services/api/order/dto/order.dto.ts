import { ICartItem } from '../../../storage/cart/dto/cart-item.dto';

export interface IOrder {
  name: string;
  email: string;
  phone: string;
  items: ICartItem[];
}
