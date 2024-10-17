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
    const { price, sort, discounted: filterDiscounted } = filter;
    const fromPrice = price?.from ? parseInt(price.from) : null;
    const toPrice = price?.to ? parseInt(price.to) : null;

    const filteredProducts = products.filter((product) => {
      if ((discounted || filterDiscounted) && !product.discont_price) {
        return false;
      }

      if (fromPrice !== null && product.finalPrice < fromPrice) {
        return false;
      }

      if (toPrice !== null && product.finalPrice > toPrice) {
        return false;
      }

      return !(categoryId && product.categoryId !== categoryId);
    });

    const sortMap: { [key in SortOptionsEnum]: (a: IProduct, b: IProduct) => number } = {
      [SortOptionsEnum.DEFAULT]: () => 0,
      [SortOptionsEnum.NEWEST]: (a, b) => a.id - b.id,
      [SortOptionsEnum.PRICE_HIGH_TO_LOW]: (a, b) => b.finalPrice - a.finalPrice,
      [SortOptionsEnum.PRICE_LOW_TO_HIGH]: (a, b) => a.finalPrice - b.finalPrice,
    };

    const sortedProducts = filteredProducts.sort(sortMap[sort] || (() => 0));

    return sortedProducts.slice(0, limit);
  }, [products, filter, categoryId, discounted, limit]);

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
      {!withoutFiler && (
        <ProductsFilter 
          filter={filter}
          onChange={setFilter} 
          onClear={() => setFilter(defaultFilter)}
          withDiscount={!discounted} 
        />
      )}
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
