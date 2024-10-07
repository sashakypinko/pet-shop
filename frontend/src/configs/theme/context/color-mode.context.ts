import { createContext } from 'react';

const ColorModeContext = createContext({
  /* eslint-disable @typescript-eslint/no-empty-function */
  toggleColorMode: () => {},
});

export default ColorModeContext;
