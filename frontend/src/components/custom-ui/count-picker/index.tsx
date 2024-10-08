import { ReactElement } from 'react';
import { Box, IconButton, styled, Typography } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const CountPickerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const ChangeCountButton = styled(IconButton)(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.palette.text.disabled,
  borderRadius: 6,
  padding: 16,
}));

const CountText = styled(Typography)({
  fontSize: 20,
  fontWeight: 600,
  width: 96,
  textAlign: 'center',
});

interface Props {
  value: number;
  min?: number;
  max?: number;
  onChange: (newValue: number) => void;
}

const CountPicker = ({ value, min = 0, max, onChange }: Props): ReactElement => {
  const handleIncrease = () => {
    if (!max || value < max) onChange(value + 1);
  };

  const handleDecrease = () => {
    if (value > min) onChange(value - 1);
  };

  return (
    <CountPickerBox>
      <ChangeCountButton onClick={handleDecrease} disabled={value <= min}>
        <Remove />
      </ChangeCountButton>
      <CountText>{value}</CountText>
      <ChangeCountButton onClick={handleIncrease} disabled={!!(max && value >= max)}>
        <Add />
      </ChangeCountButton>
    </CountPickerBox>
  );
};

export default CountPicker;
