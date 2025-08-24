import React, { useState } from "react";
import { ThemeProvider, Box, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

import createAppTheme from "./components/Theme/theme";
import Gallery from "./Pages/Gallery/Gallery.jsx";

const App = () => {
  // Default theme name
  const [themeName, setThemeName] = useState(localStorage.getItem("appTheme") || "dark");

  // Create theme from selected themeName
  const theme = createAppTheme(themeName);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* Navbar stays fixed across all routes */}
        <Navbar onThemeChange={setThemeName} themeName={themeName} />

        {/* Main content changes based on route */}
        <Box padding={{ sm: 1.5, md: 2, lg: 4  }} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Box>

        {/* Footer stays fixed across all routes */}
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
