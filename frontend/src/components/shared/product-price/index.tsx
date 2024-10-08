import { ReactElement } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

interface Props {
  price: number;
  discountPrice: number | null;
}

const ProductPrice = ({ price, discountPrice }: Props): ReactElement => {
  const theme = useTheme();

  return (
    <Box display="flex" gap={2} alignItems="baseline">
      <Typography variant="h3">${discountPrice || price}</Typography>
      {discountPrice !== null && (
        <Typography variant="subtitle1" color={theme.palette.text.secondary}>
          ${price}
        </Typography>
      )}
    </Box>
  );
};

export default ProductPrice;
