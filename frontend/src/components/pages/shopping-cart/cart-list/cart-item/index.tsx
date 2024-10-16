import { ReactElement } from 'react';
import { ICartItem } from '../../../../../services/storage/cart/dto/cart-item.dto';
import { Box, IconButton, styled, Typography } from '@mui/material';
import { generateImageUrl } from '../../../../../helpers/url-helper';
import { CloseRounded } from '@mui/icons-material';
import CountPicker from '../../../../custom-ui/count-picker';
import ProductPrice from '../../../../shared/product-price';
import { generatePath, Link } from 'react-router-dom';
import { RouteEnum } from '../../../../../routes/enums/route.enum';

const ItemCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  borderRadius: 12,
  border: '1px solid',
  borderColor: theme.palette.text.disabled,

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const Image = styled('img')(({ theme }) => ({
  aspectRatio: '1 / 0.8',
  objectFit: 'cover',
  borderRadius: '12px 0 0 12px',
  height: 180,
  borderRight: '1px solid',
  borderColor: theme.palette.text.disabled,

  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'auto',
    borderRight: 'none',
    borderRadius: 12,
  },
}));

const ItemDetails = styled(Box)({
  width: '100%',
  padding: 32,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 8,
});

const ProductLink = styled(Link)({
  display: 'flex',
});

const CountContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: 32,

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
    gap: 16,
  },
}));

interface Props {
  item: ICartItem;
  onUpdate: (cartItem: ICartItem) => void;
  onRemove: (id: number) => void;
}

const CartItem = ({ item, onUpdate, onRemove }: Props): ReactElement => {
  return (
    <ItemCard>
      <ProductLink to={generatePath(RouteEnum.PRODUCT_DETAILS, { id: item.product.id.toString() })}>
        <Image src={generateImageUrl(item.product.image)} alt={item.product.title} />
      </ProductLink>
      <ItemDetails>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1">{item.product.title}</Typography>
          <IconButton onClick={() => onRemove(item.product.id)}>
            <CloseRounded />
          </IconButton>
        </Box>
        <CountContainer>
          <CountPicker value={item.count} max={10} onChange={(count) => onUpdate({ ...item, count })} />
          <ProductPrice
            price={item.product.price * item.count}
            discountPrice={item.product.discont_price ? item.product.discont_price * item.count : null}
          />
        </CountContainer>
      </ItemDetails>
    </ItemCard>
  );
};

export default CartItem;
