import { ICategory } from '../../services/api/category/dto/category.dto';

export type CategoriesState = {
  categories: ICategory[];
  selectedCategory: ICategory | null;
  loading: boolean;
  error: any;
};
