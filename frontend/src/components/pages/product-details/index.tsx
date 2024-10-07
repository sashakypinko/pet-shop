import {ReactElement, useEffect, useMemo, useState} from 'react';
import ContainerWithBreadcrumbs from '../../custom-ui/container-with-breadcrumbs';
import {RouteEnum} from '../../../routes/enums/route.enum';
import {changeSelectedProduct} from '../../../store/products/slice';
import {generatePath, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {selectCategories, selectProducts} from '../../../store/selectors';
import {changeSelectedCategory} from '../../../store/categories/slice';
import {Box, Grid, styled, Typography, useTheme} from '@mui/material';
import DiscountChip from '../../shared/discount-chip';
import CountPicker from '../../custom-ui/count-picker';
import Button from '../../custom-ui/button';
import {generateImageUrl} from '../../../helpers/url-helper';
import {addCartItem} from '../../../store/cart/slice';

const Image = styled('img')({
  width: '100%',
  objectFit: 'cover',
  borderRadius: 12,
});

const ProductDetailsPage = (): ReactElement => {
  const [count, setCount] = useState<number>(1);
  const {id: productId} = useParams();
  const dispatch = useDispatch();
  const {selectedProduct, loading: productsLoading} = useSelector(selectProducts);
  const {selectedCategory, loading: categoriesLoading} = useSelector(selectCategories);

  const theme = useTheme();

  useEffect(() => {
    if (productId) {
      dispatch(changeSelectedProduct(parseInt(productId)));
    }
  }, [productId]);

  useEffect(() => {
    if (selectedProduct) {
      dispatch(changeSelectedCategory(selectedProduct.categoryId));
    }
  }, [selectedProduct]);
  
  const handleAddToCart = () => {
    if (!selectedProduct) return;
    
    dispatch(addCartItem({
      product: selectedProduct,
      count,
    }));
  };

  const breadcrumbLinks = useMemo(() => {
    return [
      {label: 'Main Page', url: RouteEnum.MAIN},
      {label: 'Categories', url: RouteEnum.CATEGORIES},
      {
        label: selectedCategory?.title || '',
        url: generatePath(RouteEnum.CATEGORY_PRODUCTS, {id: selectedCategory?.id?.toString() || ''}),
      },
      {label: selectedProduct?.title || ''},
    ];
  }, [selectedProduct, selectedCategory]);

  if (productsLoading || categoriesLoading) {
    return <>Loading...</>;
  }

  if (!selectedProduct) {
    return <>Loading...</>;
  }

  return (
    <ContainerWithBreadcrumbs
      links={breadcrumbLinks}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Image src={generateImageUrl(selectedProduct.image)} alt={selectedProduct.title}/>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box display="flex" flexDirection="column" gap={4}>
            <Typography variant="h3">{selectedProduct.title}</Typography>
            <Box display="flex" gap={2} alignItems="baseline">
              <Typography variant="h2">${selectedProduct.discont_price}</Typography>
              {
                selectedProduct.discont_price && (
                  <>
                    <Typography
                      variant="h3"
                      color={theme.palette.text.secondary}
                    >
                      ${selectedProduct.price}
                    </Typography>
                    <DiscountChip
                      sx={{alignSelf: 'start', mt: 1}}
                      product={selectedProduct}
                    />
                  </>
                )
              }
            </Box>
            <Box display="flex" gap={4}>
              <CountPicker
                value={count}
                min={1}
                max={10}
                onChange={setCount}
              />
              <Button variant="contained" onClick={handleAddToCart} fullWidth>Add to cart</Button>
            </Box>
            <Typography>Description</Typography>
            <Typography>{selectedProduct.description}</Typography>
          </Box>
        </Grid>
      </Grid>
    </ContainerWithBreadcrumbs>
  );
};

export default ProductDetailsPage;