import SortOptionsEnum from '../../../enums/sort-options.enum';

export type PriceFilter = {
  from?: string;
  to?: string;
};

export type ProductFilter = {
  price?: PriceFilter;
  discounted?: boolean;
  sort: SortOptionsEnum;
};