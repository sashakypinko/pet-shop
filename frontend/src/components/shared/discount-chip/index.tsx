import {ReactElement} from 'react';
import {Chip, styled, SxProps} from '@mui/material';
import {IProduct} from '../../../services/api/product/dto/product.dto';

const StyledChip = styled(Chip)({
  borderRadius: 6,
  fontSize: 20,
  fontWeight: 600,
});

interface Props {
  product: IProduct;
  sx?: SxProps;
}

const DiscountChip = ({ product, sx }: Props): ReactElement | null => {
  if (!product.price || !product.discont_price) {
    return null;
  }

  const discountPercentage = Math.round(100 - product.discont_price * 100 / product.price);
  
  return (
    <StyledChip
      sx={sx}
      label={`-${discountPercentage}%`} 
      color="primary"
    />
  );
};

export default DiscountChip;