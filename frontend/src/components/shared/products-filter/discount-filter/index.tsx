import { ReactElement } from 'react';
import { FormControlLabel } from '@mui/material';
import Checkbox from '../../../custom-ui/checkbox';

interface Props {
  value: boolean;
  onChange: (newValue: boolean) => void;
}

const DiscountFilter = ({ value, onChange }: Props): ReactElement => {
  const handleChange = (): void => {
    onChange(!value);
  };

  return (
    <FormControlLabel
      sx={{ ml: 0 }}
      slotProps={{ typography: { variant: 'subtitle1', fontWeight: 600 } }}
      control={<Checkbox checked={value} onChange={handleChange} />}
      label="Discounted items"
      labelPlacement="start"
    />
  );
};

export default DiscountFilter;
