import { ReactElement } from 'react';
import { Box, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import SortOptionsEnum from '../../../../enums/sort-options.enum';

interface Props {
  value: SortOptionsEnum;
  onChange: (newValue: SortOptionsEnum) => void;
}

const Sorting = ({ value, onChange }: Props): ReactElement => {
  const handleChange = (e: SelectChangeEvent<SortOptionsEnum>): void => {
    onChange(e.target.value as SortOptionsEnum);
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography variant="subtitle1" fontWeight={600}>
        Sorted
      </Typography>
      <Select value={value} onChange={handleChange} size="small">
        <MenuItem value={SortOptionsEnum.DEFAULT}>by default</MenuItem>
        <MenuItem value={SortOptionsEnum.NEWEST}>newest</MenuItem>
        <MenuItem value={SortOptionsEnum.PRICE_HIGH_TO_LOW}>price: high-low</MenuItem>
        <MenuItem value={SortOptionsEnum.PRICE_LOW_TO_HIGH}>price: low-high</MenuItem>
      </Select>
    </Box>
  );
};

export default Sorting;
