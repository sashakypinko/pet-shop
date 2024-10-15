import type { ReactElement } from 'react';
import { styled, Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';

const Icon = styled('span')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 40,
  borderRadius: 6,
  border: '1px solid',
  borderColor: theme.palette.text.disabled,
  backgroundColor: theme.palette.background.default,

  'input:hover ~ &': {
    backgroundColor: theme.palette.text.disabled,
  },
  'input:disabled ~ &': {
    background: theme.palette.text.disabled,
  },
}));

const CheckedIcon = styled(Icon)(() => ({
  backgroundColor: '#0D50FF',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&::before': {
    display: 'block',
    width: 24,
    height: 24,
    backgroundImage:
      'url("data:image/svg+xml;charset=utf-8,%3Csvg' +
      ' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 18 18\'' +
      ' fill=\'none\'%3E%3Cpath d=\'M17 1L6 12L1 7\' stroke=\'%23fff\'' +
      ' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\' /%3E%3C/svg%3E")',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#0a3bba',
  },
}));

const Checkbox = (props: CheckboxProps): ReactElement => {
  return (
    <MuiCheckbox
      {...props}
      sx={{ '&:hover': { bgcolor: 'transparent' } }}
      checkedIcon={<CheckedIcon />}
      icon={<Icon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
    />
  );
};

export default Checkbox;
