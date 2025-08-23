// theme.js
import { createTheme } from '@mui/material/styles';

// Base theme configuration
const baseTheme = {
  typography: {
    fontFamily: '"Lexend", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
};

// Theme configurations for different color schemes
export const themeConfigs = {
  light: {
    palette: {
      mode: 'light',
      primary: {
        main: '#f8f9fc',
        Mbtn: "#607afb",
        contrastText: '#000',
        btnColor: "#e6e9f4",
        btnHover: "#435ed5ff",
      },
      secondary: {
        main: '#607afb',
        cardborder: "#344d65"
      },
      background: {
        default: '#f8f9fc',
        paper: '#f8f9fc',
      },
    },
  },
  dark: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
        contrastText: '#fff',
        Mbtn: "#566bc9ff",
        btnColor: "#21284a",
        btnHover: "#435ed5ff",
      },
      secondary: {
        main: '#f48fb1',
        cardTextcolor: "#93adc8",
        cardborder: "#344d65",
      },
      background: {
        default: '#121212',
        paper: '#1d1d1d',
      },
    },
  },
  yellow: {
    palette: {
      mode: 'light',
      primary: {
        main: '#221d11',
        contrastText: '#fff',
        Mbtn: "#c79516ff",
        btnColor: "#473d22",
        btnHover: "#d6aa3bff",
      },
      secondary: {
        main: '#F4C753',
        cardTextcolor: "#b8a983",
        cardborder: "#5c4e2c",
        cardbg: "#342c19",
      },
      background: {
        default: '#221d11',
        paper: '#221d11',
      },
    },
  },
  red: {
    palette: {
      mode: 'light', // Keep as 'light' or 'dark'
      primary: {
        main: '#221112',
        contrastText: '#fff',
        Mbtn: "#d32f2f",
        btnColor: "#472426",
        btnHover: "#d83e3eff",
      },
      secondary: {
        main: '#ea2832',
        cardbg: "#331a1b",
        cardTextcolor: "#c08b8e",
        cardborder: "#5d2e31",
      },
      background: {
        default: '#221112',
        paper: '#221112',
      },
    },
  },
  green: {
    palette: {
      mode: 'light', // Keep as 'light' or 'dark'
      primary: {
        main: '#10231c',
        Mbtn: "#019863",
        contrastText: '#fff',
        btnColor: "#214a3c",
        btnHover: "#1daf7cff",
      },
      secondary: {
        main: '#019863',
        cardbg: "#17352b",
        cardTextcolor: "#8ecdb7",
        cardborder: "#2d6652",

      },
      background: {
        default: '#10231c',
        paper: '#10231c',
      },
    },
  },
};

// Create a theme based on the configuration
export const createAppTheme = (themeName = 'dark') => {
  // Use the provided theme if it exists, otherwise fall back to dark
  const config = themeConfigs[themeName] || themeConfigs.dark;
  return createTheme({
    ...baseTheme,
    ...config,
    // Add custom colors that can be accessed via theme.palette.custom
    palette: {
      ...config.palette,
      custom: {
        blue: '#2196f3',
        green: '#4caf50',
        orange: '#ff9800',
        red: '#f44336',
        yellow: '#ffeb3b',
      },
    },
  });
};

export default createAppTheme;