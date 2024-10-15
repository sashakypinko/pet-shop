import { ReactElement } from 'react';
import { Box, styled } from '@mui/material';
import { ProductFilter, PriceFilter as PriceFilterType } from './types';
import PriceFilter from './price-filter';
import DiscountFilter from './discount-filter';
import Sorting from './sorting';
import SortOptionsEnum from '../../../enums/sort-options.enum';
import useIsMobile from '../../../hooks/use-is-mobile.hook';

const FilterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap: 40,

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'start',
    gap: 8,
  },
}));

interface Props {
  filter: ProductFilter;
  onFilterChange: (newFilter: ProductFilter) => void;
  withPrice?: boolean;
  withDiscount?: boolean;
  withSort?: boolean;
}

const ProductsFilter = (props: Props): ReactElement => {
  const { filter, onFilterChange, withPrice = true, withDiscount = true, withSort = true } = props;

  const isMobile = useIsMobile();

  const handleChange = function <T>(value: T, field: string): void {
    onFilterChange({ ...filter, [field]: value });
  };

  return (
    <FilterContainer
      display="flex"
      alignItems="center"
      flexDirection={isMobile ? 'column' : 'row'}
      gap={isMobile ? 1 : 5}
    >
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
    </FilterContainer>
  );
};

export default ProductsFilter;
