import { ChangeEvent, KeyboardEvent, ReactElement, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { PriceFilter as PriceFilterType } from '../types';
import Input from '../../../custom-ui/input';

interface Props {
  value?: PriceFilterType;
  onChange: (newValue: PriceFilterType) => void;
}

const defaultPriceRange = { from: '', to: '' };

const PriceFilter = ({ value, onChange }: Props): ReactElement => {
  const [priceRange, setPriceRange] = useState<PriceFilterType>(defaultPriceRange);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string): void => {
    setPriceRange({ ...priceRange, [field]: e.target.value });
  };

  const handleApply = (): void => {
    onChange(priceRange);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      handleApply();
    }
  };

  useEffect(() => {
    if (!value) {
      setPriceRange(defaultPriceRange);
    }
  }, [value]);

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography variant="subtitle1" fontWeight={600}>
        Price
      </Typography>
      <Input
        type="number"
        label="from"
        value={priceRange.from}
        onChange={(e) => handleChange(e, 'from')}
        onBlur={handleApply}
        onKeyDown={handleKeyDown}
      />
      <Input
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
