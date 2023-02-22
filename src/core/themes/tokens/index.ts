import { darkThemeTokens } from 'core/themes/tokens/theme-tokens/dark-theme-tokens/dark-theme-tokens';
import { lightThemeTokens } from 'core/themes/tokens/theme-tokens/light-theme-tokens/light-theme-tokens';

export const themeTokens: { [key: string]: { [key: string]: { [key: string]: string } } } = {
  dark: darkThemeTokens,
  light: lightThemeTokens,
};