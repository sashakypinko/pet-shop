import { ChangeEvent, KeyboardEvent, ReactElement, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { PriceFilter as PriceFilterType } from '../types';
import TextField from '../../../custom-ui/text-field';

interface Props {
  value?: PriceFilterType;
  onChange: (newValue: PriceFilterType) => void;
}

const PriceFilter = ({ value = { from: '', to: '' }, onChange }: Props): ReactElement => {
  const [priceRange, setPriceRange] = useState<PriceFilterType>(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string): void => {
    setPriceRange({ ...priceRange, [field]: e.target.value });
  };

  const handleApply = (): void => {
    onChange(priceRange);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleApply();
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography variant="subtitle1" fontWeight={600}>
        Price
      </Typography>
      <TextField
        type="number"
        label="from"
        value={priceRange.from}
        onChange={(e) => handleChange(e, 'from')}
        onBlur={handleApply}
        onKeyDown={handleKeyDown}
      />
      <TextField
        type="number"
        label="to"
        value={priceRange.to}
        onChange={(e) => handleChange(e, 'to')}
        onBlur={handleApply}
        onKeyDown={handleKeyDown}
      />
    </Box>
  );
};

export default PriceFilter;
