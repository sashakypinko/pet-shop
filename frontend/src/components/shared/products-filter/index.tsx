import { ReactElement } from 'react';
import { Box } from '@mui/material';
import { ProductFilter, PriceFilter as PriceFilterType } from './types';
import PriceFilter from './price-filter';
import DiscountFilter from './discount-filter';
import Sorting from './sorting';
import SortOptionsEnum from '../../../enums/sort-options.enum';

interface Props {
  filter: ProductFilter;
  onFilterChange: (newFilter: ProductFilter) => void;
  withPrice?: boolean;
  withDiscount?: boolean;
  withSort?: boolean;
}

const ProductsFilter = (props: Props): ReactElement => {
  const { filter, onFilterChange, withPrice = true, withDiscount = true, withSort = true } = props;

  const handleChange = function <T>(value: T, field: string): void {
    onFilterChange({ ...filter, [field]: value });
  };

  return (
    <Box display="flex" alignItems="center" gap={5}>
      {withPrice && (
        <PriceFilter value={filter.price} onChange={(value) => handleChange<PriceFilterType>(value, 'price')} />
      )}
      {withDiscount && (
        <DiscountFilter
          value={filter.discounted || false}
          onChange={(value) => handleChange<boolean>(value, 'discounted')}
        />
      )}
      {withSort && <Sorting value={filter.sort} onChange={(value) => handleChange<SortOptionsEnum>(value, 'sort')} />}
    </Box>
  );
};

export default ProductsFilter;
