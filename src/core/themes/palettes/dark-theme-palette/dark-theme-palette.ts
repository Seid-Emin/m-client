export const darkThemePalette: (colors: { [key: string]: { [key: string]: string } }) => { [key: string]: { [key: string]: string } } = (colors) => ({
  primary: {
    main: colors.orangeAccent[300],
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
    default: colors.primary[500],
    input: colors.greenAccent[500],
  },
});
