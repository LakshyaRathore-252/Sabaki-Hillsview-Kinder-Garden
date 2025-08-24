import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { Box, ThemeProvider } from '@mui/material'
import createAppTheme from './components/Theme/theme'
import { CssBaseline } from '@mui/material'
import { useState } from 'react'

const App = () => {
  // Default theme name
  const [themeName, setThemeName] = useState( localStorage.getItem("appTheme") || "dark");

  // Create theme from selected themeName
  const theme = createAppTheme(themeName);

  return (
    <ThemeProvider theme={theme}> {/* Fixed: pass the theme instance, not the function */}
      <CssBaseline />
      <Navbar onThemeChange={setThemeName} themeName={themeName} />
      <Box padding={{ sm: 1.5, md: 2, lg: 4 }}>
        <Home />
      </Box>
    </ThemeProvider>
  )
}

export default App