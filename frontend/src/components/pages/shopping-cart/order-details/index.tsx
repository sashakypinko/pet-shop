import { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../../../store/selectors';
import { Box, styled, Typography, useTheme } from '@mui/material';
import OrderForm from './order-form';
import ConfirmationModal from '../../../custom-ui/confirmation-modal';

const StyledCard = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  background: '#F1F3F4',
  borderRadius: 12,
  padding: 32,
  gap: 32,
});

const OrderDetails = (): ReactElement | null => {
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  const { cartItems, totalAmount } = useSelector(selectCart);
  const theme = useTheme();

  if (!cartItems.length) {
    return null;
  }

  return (
    <StyledCard>
      <Typography variant="h3" fontWeight={700}>
        Order details
      </Typography>
      <Box>
        <Typography variant="h3" fontWeight={500} color={theme.palette.text.secondary}>
          {cartItems.length} item{cartItems.length === 1 ? '' : 's'}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="end">
          <Typography variant="h3" fontWeight={500} color={theme.palette.text.secondary}>
            Total
          </Typography>
          <Typography variant="h2">${totalAmount}</Typography>
        </Box>
      </Box>
      <OrderForm onSubmit={() => setShowConfirmation(true)} />
      <ConfirmationModal open={showConfirmation} onClose={() => setShowConfirmation(false)} title="Congratulations!">
        <Box display="flex" flexDirection="column" marginRight={8} gap={2}>
          <Typography variant="subtitle1" color="#fff">
            Your order has been successfully placed on the website.
          </Typography>
          <Typography variant="subtitle1" color="#fff">
            A manager will contact you shortly to confirm your order.
          </Typography>
        </Box>
      </ConfirmationModal>
    </StyledCard>
  );
};

export default OrderDetails;
