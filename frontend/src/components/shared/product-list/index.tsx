import { ReactElement, useEffect, useMemo, useState } from 'react';
import { Grid } from '@mui/material';
import { IProduct } from '../../../services/api/product/dto/product.dto';
import ProductItem from './product-item';
import ProductsFilter from '../products-filter';
import { ProductFilter } from '../products-filter/types';
import SortOptionsEnum from '../../../enums/sort-options.enum';
import { addCartItem } from '../../../store/cart/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../../store/selectors';
import { getProducts } from '../../../store/products/slice';
import ProductListSkeleton from './skeleton';

interface Props {
  categoryId?: number;
  discounted?: boolean;
  limit?: number;
  withoutFiler?: boolean;
}

const defaultFilter: ProductFilter = {
  sort: SortOptionsEnum.DEFAULT,
  discounted: false,
};

const ProductList = ({ categoryId, discounted, limit, withoutFiler }: Props): ReactElement => {
  const [filter, setFilter] = useState<ProductFilter>(defaultFilter);

  const dispatch = useDispatch();
  const { products, loading } = useSelector(selectProducts);

  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
    }
  }, []);

  const preparedProducts: IProduct[] = useMemo(() => {
    // eslint-disable-next-line camelcase
    return products
      .filter((product) => {
        let keep = true;

        if (discounted || filter.discounted) {
          // eslint-disable-next-line camelcase
          keep = !!product.discont_price;
        }

        if (filter.price?.from) {
          keep = product.price >= parseInt(filter.price.from);
        }

        if (filter.price?.to) {
          keep = product.price <= parseInt(filter.price.to);
        }

        if (categoryId) {
          keep = product.categoryId === categoryId;
        }

        return keep;
      })
      .sort((a, b) => {
        if (filter.sort === SortOptionsEnum.NEWEST) {
          return 0;
        }

        if (filter.sort === SortOptionsEnum.PRICE_HIGH_TO_LOW) {
          return a.price < b.price ? 1 : -1;
        }

        if (filter.sort === SortOptionsEnum.PRICE_LOW_TO_HIGH) {
          return a.price > b.price ? 1 : -1;
        }

        return 0;
      })
      .slice(0, limit);
  }, [products, filter]);

  const handleAddToCard = (product: IProduct) => {
    dispatch(
      addCartItem({
        product,
        count: 1,
      }),
    );
  };

  return (
    <>
      {!withoutFiler && <ProductsFilter filter={filter} onFilterChange={setFilter} withDiscount={!discounted} />}
      {loading ? (
        <ProductListSkeleton />
      ) : (
        <Grid container spacing={4}>
          {preparedProducts.map((product: IProduct) => (
            <Grid key={product.id} item xs={12} sm={6} md={3}>
              <ProductItem product={product} onAdd={() => handleAddToCard(product)} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default ProductList;
