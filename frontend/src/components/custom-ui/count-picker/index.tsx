import { ReactElement } from 'react';
import { Box, IconButton, styled, Typography } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const CountPickerBox = styled(Box)(({ theme }) => ({
  width: 'fit-content',
  display: 'flex',
  border: '1px solid',
  borderColor: theme.palette.text.disabled,
  borderRadius: 6,
}));

const ChangeCountButton = styled(IconButton)(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.palette.text.disabled,
  borderRadius: 6,
  padding: 16,
  margin: -1,
}));

const CountText = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 20,
  fontWeight: 600,
  width: 96,
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
