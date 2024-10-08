import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../../../store/selectors';
import { Box, styled, Typography, useTheme } from '@mui/material';

const StyledCard = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  background: '#F1F3F4',
  borderRadius: 12,
  padding: 32,
  gap: 32,
});

const OrderDetails = (): ReactElement => {
  const { cartItems, totalAmount } = useSelector(selectCart);
  const theme = useTheme();

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
    </StyledCard>
  );
};

export default OrderDetails;
