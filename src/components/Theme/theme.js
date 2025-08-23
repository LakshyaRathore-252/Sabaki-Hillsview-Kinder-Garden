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
        contrastText: '#000',
        btnColor: "#e6e9f4",
        btnHover: "#607afb",
      },
      secondary: {
        main: '#607afb',
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
        btnColor: "#21284a",
        btnHover: "#566bc9ff",
      },
      secondary: {
        main: '#f48fb1',
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
        btnColor: "#473d22",
        btnHover: "#6f5f32ff",
      },
      secondary: {
        main: '#F4C753',
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
        btnColor: "#472426",
        btnHover: "#5d2e30ff",
      },
      secondary: {
        main: '#ea2832',
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
        contrastText: '#fff',
        btnColor: "#214a3c",
        btnHover: "#2d715bff",
      },
      secondary: {
        main: '#019863',

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