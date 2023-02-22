import { themeTokens } from 'core/themes/tokens';
import { palettes } from 'core/themes/palettes';
import { createTheme } from '@mui/material/styles';

// mui theme settings
const defaultTheme = createTheme();
export const themeSettings: (mode: string) => any = (mode: string) => {
    const colors = themeTokens[mode] || themeTokens['light'];
    const palette: any = {
        mode: mode,
        ...palettes[mode](colors),
    }

    return {
        ...defaultTheme,
        palette,
        typography: {
            fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
            fontSize: 12,
            h1: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                fontSize: 40,
            },
            h2: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                fontSize: 32,
            },
            h3: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                fontSize: 24,
            },
            h4: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                fontSize: 20,
            },
            h5: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                fontSize: 16,
            },
            h6: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                fontSize: 14,
            },
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,

                mobile: 0,
                tablet: 640,
                laptop: 1024,
                desktop: 1200,
            },
        },
        components: {
            MuiPaper: {
                defaultProps: {
                    size: 'small',
                },
                styleOverrides: {
                    root: {
                        '&::before': {
                            borderBottom: palette.background.input,
                            opacity: 1,
                        },
                        // width: '30%',
                        padding: '8px',

                        '&.Mui-disabled': {
                            backgroundColor: 'transparent',
                            border: '1px solid black',

                            '&:before': {
                                border: 'none'
                            },

                            '.MuiInput-input': {
                                cursor: 'not-allowed',
                            },
                        },
                    },

                }
            },
            MuiButton: {
                defaultProps: {
                    size: 'small',
                },
                styleOverrides: {
                    root: {
                        borderRadius: '1rem',
                        textTransform: 'none',
                        fontSize: '0.7rem',
                        height: defaultTheme.spacing(4.2),
                    },
                },
                variants: [
                    {
                        props: { variant: 'contained' },
                        style: {
                            minWidth: 'fit-content',
                            backgroundColor: colors.orangeAccent[500],
                            color: colors.primary[400],
                            border: 'none',
                            '&:hover': {
                                backgroundColor: colors.orangeAccent[700],
                            }
                        },
                    },
                    {
                        props: { variant: 'action' },
                        style: {
                            minWidth: 'fit-content',
                            maxWidth: 'fit-content',
                            backgroundColor: colors.orangeAccent[500],
                            color: colors.primary[400],
                            maxHeight: '60%',
                            border: 'none',
                            '&:hover': {
                                backgroundColor: colors.orangeAccent[700],
                            }
                        },
                    },
                ],
            },
            MuiFilledInput: {
                defaultProps: {
                    margin: 'dense',
                },
            },
            MuiFormControl: {
                defaultProps: {
                    margin: 'dense',
                },
            },
            MuiFormHelperText: {
                defaultProps: {
                    margin: 'dense',
                },
            },
            MuiIconButton: {
                size: 'small',
            },
            MuiTextField: {
                defaultProps: {
                    variant: 'standard',
                    margin: 'dense',
                    autoComplete: 'off'
                },
            },
            MuiInput: {
                defaultProps: {
                    autoComplete: 'off'
                },
            },
            MuiModal: {
                defaultProps: {
                    autoComplete: 'off',
                    disableScrollLock: true,
                },
            },
            MuiListItem: {
                defaultProps: {
                    dense: true,
                },
            },
            MuiOutlinedInput: {
                defaultProps: {
                    margin: 'dense',
                },
            },
            MuiFab: {
                defaultProps: {
                    size: 'small',
                },
            },
            MuiDrawer: {
                defaultProps: {
                    size: 'small',
                },
                styleOverrides: {
                    root: {
                        backgroundColor: colors.grey[400],
                        '& .MuiPaper-root': {
                            backgroundColor: colors.grey[400],
                        }
                    },
                },
            },
            MuiTable: {
                defaultProps: {
                    size: 'small',
                },
            },
            MuiToolbar: {
                defaultProps: {
                    variant: 'dense',
                },
            },
            MuiMenu: {
                defaultProps: {
                    disableScrollLock: true,
                }
            },
            MuiMenuItem: {
                defaultProps: {
                    disableRipple: true
                }
            },
        },
    };
};
