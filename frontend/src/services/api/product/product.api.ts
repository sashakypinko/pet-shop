import ApiService from '../api-service';
import { type IProduct } from './dto/product.dto';

class ProductApiService extends ApiService {
  getAll = async (): Promise<IProduct[]> => await this.get('/all').then((res) => res.data);

  getById = async (id: string): Promise<IProduct> => await this.get(id).then((res) => res.data);
}

export const ProductApi = new ProductApiService('products');
