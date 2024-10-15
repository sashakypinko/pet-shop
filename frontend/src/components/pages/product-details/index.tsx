import { ReactElement, useEffect, useMemo, useState } from 'react';
import ContainerWithBreadcrumbs from '../../custom-ui/container-with-breadcrumbs';
import { RouteEnum } from '../../../routes/enums/route.enum';
import { setSelectedProduct } from '../../../store/products/slice';
import { generatePath, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories, selectProducts } from '../../../store/selectors';
import { Box, Grid, styled, Typography, useTheme } from '@mui/material';
import DiscountChip from '../../shared/discount-chip';
import CountPicker from '../../custom-ui/count-picker';
import Button from '../../custom-ui/button';
import { generateImageUrl } from '../../../helpers/url-helper';
import { addCartItem } from '../../../store/cart/slice';
import ProductDetailsSkeleton from './skeleton';
import { shortenString } from '../../../helpers/string-helper';
import ServerError from '../../shared/error-fallback';

const Image = styled('img')({
  width: '100%',
  objectFit: 'cover',
  borderRadius: 12,
  aspectRatio: '1 / 1',
});

const ExpandDescriptionButton = styled(Typography)({
  fontWeight: 500,
  cursor: 'pointer',
  textDecoration: 'underline',
});

const ProductDetailsPage = (): ReactElement => {
  const [count, setCount] = useState<number>(1);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState<boolean>(false);
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading: productsLoading } = useSelector(selectProducts);
  const { selectedCategory, loading: categoriesLoading } = useSelector(selectCategories);

  const theme = useTheme();

  useEffect(() => {
    if (productId) {
      dispatch(setSelectedProduct(parseInt(productId)));
    }
  }, [productId]);

  const handleAddToCart = () => {
    if (!selectedProduct) return;

    dispatch(
      addCartItem({
        product: selectedProduct,
        count,
      }),
    );
  };

  const breadcrumbLinks = useMemo(() => {
    return [
      { label: 'Main Page', url: RouteEnum.MAIN },
      { label: 'Categories', url: RouteEnum.CATEGORIES },
      {
        label: selectedCategory?.title || '',
        url: generatePath(RouteEnum.CATEGORY_PRODUCTS, { id: selectedCategory?.id?.toString() || '' }),
      },
      { label: selectedProduct?.title || '' },
    ];
  }, [selectedProduct, selectedCategory]);

  if (productsLoading || categoriesLoading) {
    return <ProductDetailsSkeleton />;
  }

  if (!selectedProduct) {
    return <ServerError />;
  }

  return (
    <ContainerWithBreadcrumbs links={breadcrumbLinks}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Image src={generateImageUrl(selectedProduct.image)} alt={selectedProduct.title} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Box display="flex" flexDirection="column" gap={4}>
            <Typography variant="h3">{selectedProduct.title}</Typography>
            <Box display="flex" gap={2} alignItems="baseline">
              <Typography variant="h2">${selectedProduct.discont_price}</Typography>
              {selectedProduct.discont_price && (
                <>
                  <Typography variant="h3" color={theme.palette.text.secondary}>
                    ${selectedProduct.price}
                  </Typography>
                  <DiscountChip sx={{ alignSelf: 'start', mt: 1 }} product={selectedProduct} />
                </>
              )}
            </Box>
            <Box display="flex" gap={4}>
              <CountPicker value={count} min={1} max={10} onChange={setCount} />
              <Button variant="contained" onClick={handleAddToCart} fullWidth>
                Add to cart
              </Button>
            </Box>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography variant="subtitle1">Description</Typography>
              <Typography>
                {isDescriptionExpanded ? selectedProduct.description : shortenString(selectedProduct.description, 500)}
              </Typography>
              <ExpandDescriptionButton onClick={() => setIsDescriptionExpanded(true)}>
                Read {isDescriptionExpanded ? 'less' : 'more'}
              </ExpandDescriptionButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ContainerWithBreadcrumbs>
  );
};

export default ProductDetailsPage;
