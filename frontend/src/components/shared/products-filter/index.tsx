import { ReactElement, useMemo } from 'react';
import { Box, styled } from '@mui/material';
import { PriceFilter as PriceFilterType, ProductFilter } from './types';
import PriceFilter from './price-filter';
import DiscountFilter from './discount-filter';
import Sorting from './sorting';
import SortOptionsEnum from '../../../enums/sort-options.enum';
import useIsMobile from '../../../hooks/use-is-mobile.hook';
import Button from '../../custom-ui/button';

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
  onChange: (newFilter: ProductFilter) => void;
  onClear: () => void;
  withPrice?: boolean;
  withDiscount?: boolean;
  withSort?: boolean;
}

const ProductsFilter = (props: Props): ReactElement => {
  const { filter, onChange, onClear, withPrice = true, withDiscount = true, withSort = true } = props;

  const isMobile = useIsMobile();

  const handleChange = function <T>(value: T, field: string): void {
    onChange({ ...filter, [field]: value });
  };

  const isDirty = useMemo<boolean>(() => {
    return !!(filter.discounted || filter.sort !== SortOptionsEnum.DEFAULT || filter.price?.from || filter.price?.to);
  }, [filter]);

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
      {isDirty && (
        <Button
          sx={{
            padding: '4px 24px',
            fontSize: 17,
          }}
          variant="outlined"
          color="inherit"
          onClick={onClear}
        >
          Clear
        </Button>
      )}
    </FilterContainer>
  );
};

export default ProductsFilter;
