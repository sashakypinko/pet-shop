import { useMemo, useState } from 'react';
import { type Theme } from '@mui/material';
import { darkTheme, lightTheme } from '../index';
import { ThemeEnum } from '../enums/theme.enum';
import {PreferenceStorage} from '../../../services/storage/preference/preference.storage';

const useColorMode = () => {
  const [mode, setMode] = useState<ThemeEnum>(PreferenceStorage.getThemeMode() || ThemeEnum.LIGHT_MODE);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: ThemeEnum) => {
          const newMode = prevMode === ThemeEnum.LIGHT_MODE ? ThemeEnum.DARK_MODE : ThemeEnum.LIGHT_MODE;
          PreferenceStorage.changeThemeMode(newMode);
          return newMode;
        });
      },
    }),
    [],
  );

  const currentTheme = useMemo((): Theme => (mode === ThemeEnum.LIGHT_MODE ? lightTheme : darkTheme), [mode]);

  return {
    colorMode,
    currentTheme,
  };
};

export default useColorMode;
