import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

// MODIFIED FOR THEME COLORS
const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'dark' ? {
            primary: {
                main: '#363636',
            },
            secondary: {
                main: '#363636',
                // light: '#E9DB5D',
                // dark: '#A29415',
                // contrastText: '#242105',
                // contrastColor: '#ac7ddb',
            },
        } : {
            primary: {
                main: '#363636',
            },
            secondary: {
                main: '#10973d',
                // light: '#E9DB5D',
                // dark: '#A29415',
                // contrastText: '#242105',
                // contrastColor: '#ac7ddb',
            },
        }),
        // ...(mode === 'dark' && {
        //     background: {
        //         default: deepOrange[900],
        //         paper: deepOrange[900],
        //     },
        // }),
        // text: {
        //     ...(mode === 'light'
        //         ? {
        //             primary: grey[900],
        //             secondary: grey[800],
        //         }
        //         : {
        //             primary: '#fff',
        //             secondary: grey[500],
        //         }),
        // },
        typography: {
            button: {
                textTransform: 'none'
            }
        }
    },
});

const ColorModeCtx = React.createContext({ toggleColorMode: () => { }, mode: '' });

export const useColorModeCtx = () => React.useContext(ColorModeCtx)

export default function Theme({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const { toggleColorMode } = React.useMemo(() => ({
        toggleColorMode: () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
    }), []);
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    return (
        <ThemeProvider theme={theme}>
            <ColorModeCtx.Provider value={{ mode, toggleColorMode }}>
                {children}
            </ColorModeCtx.Provider>
        </ThemeProvider>
    );
}