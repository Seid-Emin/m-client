export const lightThemePalette: (colors: { [key: string]: { [key: string]: string } }) => { [key: string]: { [key: string]: string } } = (colors) => ({
  primary: {
    main: colors.orangeAccent[500],
  },
  secondary: {
    main: colors.grey[500],
  },
  neutral: {
    main: colors.grey[500],
  },
  green: {
    main: colors.greenAccent[500],
  },
  background: {
    default: colors.primary[400],
    input: colors.greenAccent[500],
  },
});
