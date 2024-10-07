import ApiService from '../api-service';
import { type ICategory } from './dto/category.dto';

class CategoryApiService extends ApiService {
  getAll = async (): Promise<ICategory[]> => await this.get('/all').then((res) => res.data);
}

export const CategoryApi = new CategoryApiService('categories');
