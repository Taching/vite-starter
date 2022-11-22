/* eslint-disable react/function-component-definition */
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { Scroll, Theme, ThemeContextType } from '../@types/theme';

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [themeMode, setThemeMode] = React.useState<Theme>('dark');
  const [scrollMode, setScrollMode] = React.useState<Scroll>(false);
  const themeValue = React.useMemo(
    () => ({
      // theme
      theme: themeMode,
      changeTheme: setThemeMode,
      // scroll
      scroll: scrollMode,
      changeScroll: setScrollMode,
    }),
    [themeMode, scrollMode]
  );
  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
