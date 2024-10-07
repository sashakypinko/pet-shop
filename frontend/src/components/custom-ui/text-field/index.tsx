import type {ReactElement} from 'react';
import {TextField as MuiTextField, TextFieldProps} from '@mui/material';

interface Props extends TextFieldProps<'standard'> {
  maxWidth?: number
}

const TextField = ({maxWidth = 120, ...props}: Props): ReactElement => {
  return (
    <MuiTextField
      {...props}
      size="small"
      InputProps={{
        sx: {
          borderRadius: '6px',
          maxWidth,
        },
      }}
    />
  );
};

export default TextField;
