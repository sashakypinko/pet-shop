import { Box, LinearProgress } from '@mui/material';
import { ReactElement } from 'react';

const Loader = (): ReactElement => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
};

export default Loader;
