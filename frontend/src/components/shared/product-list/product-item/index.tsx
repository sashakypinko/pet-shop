import { ReactElement, useState, useMemo, useCallback } from 'react';
import { Box, styled, Typography } from '@mui/material';
import { IProduct } from '../../../../services/api/product/dto/product.dto';
import { shortenString } from '../../../../helpers/string-helper';
import Button from '../../../custom-ui/button';
import { generatePath, Link } from 'react-router-dom';
import { RouteEnum } from '../../../../routes/enums/route.enum';
import DiscountChip from '../../discount-chip';
import { generateImageUrl } from '../../../../helpers/url-helper';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../../../store/cart/slice';
import { selectCart } from '../../../../store/selectors';
import ProductPrice from '../../product-price';

const AddButton = styled(Button)({
  position: 'absolute',
  width: '-webkit-fill-available',
  margin: 16,
  left: 0,
  bottom: 8,
});

const Image = styled('img')({
  width: '100%',
  aspectRatio: '1 / 0.8',
  objectFit: 'cover',
  borderRadius: 12,
});

const ProductCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  borderRadius: 12,
  border: '1px solid',
  borderColor: theme.palette.text.disabled,
  gap: 20,
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
}));

interface Props {
  product: IProduct;
  onAdd: () => void;
}

const ProductItem = ({ product, onAdd }: Props): ReactElement => {
  const [hovered, setHovered] = useState<boolean>(false);
  const { cartItems } = useSelector(selectCart);

  const addedToCart = useMemo<boolean>(() => {
    return !!cartItems.find((item) => item.product.id === product.id);
  }, [product, cartItems]);

  return (
    <ProductCard onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Box position="relative">
        <StyledLink to={generatePath(RouteEnum.PRODUCT_DETAILS, { id: product.id.toString() })}>
          <Image src={generateImageUrl(product.image)} alt={product.title} />
        </StyledLink>
        <DiscountChip sx={{ position: 'absolute', right: 12, top: 12 }} product={product} />
        {hovered && (
          <AddButton
            color={addedToCart ? 'inherit' : 'primary'}
            variant="contained"
            onClick={addedToCart ? undefined : onAdd}
          >
            {addedToCart ? 'Added' : 'Add to cart'}
          </AddButton>
        )}
      </Box>
      <StyledLink to={generatePath(RouteEnum.PRODUCT_DETAILS, { id: product.id.toString() })}>
        <Box sx={{ padding: '0 32px 32px 32px' }} display="flex" flexDirection="column" gap={2}>
          <Typography variant="subtitle1">{shortenString(product.title, 22)}</Typography>
          <ProductPrice price={product.price} discountPrice={product.discont_price} />
        </Box>
      </StyledLink>
    </ProductCard>
  );
};

export default ProductItem;
