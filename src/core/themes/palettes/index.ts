import { darkThemePalette } from './dark-theme-palette/dark-theme-palette';
import { lightThemePalette } from './light-theme-palette/light-theme-palette';


export const palettes: { [key: string]: (colors: { [key: string]: { [key: string]: string } }) => { [key: string]: { [key: string]: string } }} = {
  dark: darkThemePalette,
  light: lightThemePalette,
};