import StorageService from '../storage-service';
import {ICartItem} from './dto/cart-item.dto';

class CartStorageService extends StorageService {
  getItems = (): ICartItem[] => {
    return this.get('items') || [];
  };

  updateItems = (newItems: ICartItem[]): void => {
    this.store('items', newItems);
  };
  
  removeItems = (): void => {
    this.remove('items');
  };
}

export const CartStorage = new CartStorageService('cart');
