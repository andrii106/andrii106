import { ThemeOptions } from "@mui/material";
import { green, lightGreen, orange, red, teal } from "@mui/material/colors";

const theme: ThemeOptions = {
    typography: {
        fontFamily: "Inter",
        fontSize: 14,
        h1: {
            fontSize: '2.5rem',
        },
        h2: {
            fontSize: '2rem',
        },
        h3: {
            fontSize: '1.53125rem',
        },
        h4: {
            fontSize: '1.3125rem',
        },
        h5: {
            fontSize: '1.09375rem',
        },
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
    },
    palette: {
        // for now mockup the palette
        primary: {
            main: "#009EC2",
            light: "#009EC2",
            dark: "#009EC2",
            contrastText: "#FFF",
        },
        secondary: {
            main: teal[500],
            light: teal[300],
            dark: teal[900],
            contrastText: teal[50],
        },
        error: {
            main: "#FF5757",
            light: red[300],
            dark: red[900],
            contrastText: red[50],
        },
        warning: {
            main: orange[500],
            light: orange[300],
            dark: orange[900],
            contrastText: orange[50],
        },
        info: {
            main: lightGreen[500],
            light: lightGreen[300],
            dark: lightGreen[900],
            contrastText: lightGreen[50],
        },
        success: {
            main: "#22C55E",
            light: green[300],
            dark: green[900],
            contrastText: green[50],
        },
        text: {
            primary: "#111926",
            secondary: "#6C757D",
            disabled: "#495057",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    '&:disabled': {
                        color: "#FFF",
                        backgroundColor: "#009EC2",
                        opacity: 0.4,
                    },
                }
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                
                }
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    height: "100vh",
                    backgroundColor: "#111926",
                    backgroundImage: `linear-gradient(180deg, #111926 35.16%, #003840 100%)`,
                },
            },
        },
    },
};

export default theme;
