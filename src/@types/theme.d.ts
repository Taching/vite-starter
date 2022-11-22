export type Theme = 'light' | 'dark';
export type Scroll = boolean;

export type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;

  scroll: Scroll;
  changeScroll: (scroll: Scroll) => void;
};
