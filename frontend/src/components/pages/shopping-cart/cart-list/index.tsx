import {ReactElement} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectCart} from '../../../../store/selectors';
import {Box} from '@mui/material';
import CartItem from './cart-item';
import {removeCartItem, updateCartItem} from '../../../../store/cart/slice';
import {ICartItem} from '../../../../services/storage/cart/dto/cart-item.dto';

const CartList = (): ReactElement => {
  const {cartItems} = useSelector(selectCart);
  const dispatch = useDispatch();
  
  const handleUpdate = (cartItem: ICartItem) => {
    dispatch(updateCartItem(cartItem));
  };
  
  const handleRemove = (id: number) => {
    dispatch(removeCartItem(id));
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {
        cartItems.map((item) => (
          <CartItem
            key={item.product.id} 
            item={item}
            onUpdate={handleUpdate}
            onRemove={handleRemove}
          />
        ))
      }
    </Box>
  );
};

export default CartList;