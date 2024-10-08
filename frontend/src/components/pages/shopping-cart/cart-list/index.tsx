import { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../../../../store/selectors';
import { Box, Typography } from '@mui/material';
import CartItem from './cart-item';
import { removeCartItem, updateCartItem } from '../../../../store/cart/slice';
import { ICartItem } from '../../../../services/storage/cart/dto/cart-item.dto';
import useSnackbar from '../../../custom-ui/snackbar/hooks/use-snackbar.hook';
import Button from '../../../custom-ui/button';
import { Link } from 'react-router-dom';
import { RouteEnum } from '../../../../routes/enums/route.enum';

const CartList = (): ReactElement => {
  const { cartItems } = useSelector(selectCart);
  const dispatch = useDispatch();
  const { successSnackbar } = useSnackbar();

  const handleUpdate = (cartItem: ICartItem) => {
    dispatch(updateCartItem(cartItem));
  };

  const handleRemove = (id: number) => {
    dispatch(removeCartItem(id));
    successSnackbar('Item removed successfully');
  };

  if (!cartItems.length) {
    return (
      <Box display="flex" flexDirection="column" gap={4}>
        <Typography variant="subtitle1">Looks like you have no items in your basket currently.</Typography>
        <Link to={RouteEnum.PRODUCTS}>
          <Button variant="contained">Continue Shopping</Button>
        </Link>
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {cartItems.map((item) => (
        <CartItem key={item.product.id} item={item} onUpdate={handleUpdate} onRemove={handleRemove} />
      ))}
    </Box>
  );
};

export default CartList;
