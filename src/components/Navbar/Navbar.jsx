// src/components/Navbar/Navbar.jsx
import { Box, Divider, useTheme } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import EnrollButton from "./EnrollButton";
import AchievementIcon from "./AchievementIcon";
import ThemeSelector from "../Navbar/ThemeSelector";

const Navbar = ({ onThemeChange, themeName }) => {
    const theme = useTheme();
    console.log(theme)
    return (
        <>
            <Box
                component="header"
                sx={{
                    padding: "1.2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    gap: "2rem",
                
                }}
            >
                <Logo />
                <NavLinks />
                <EnrollButton />
                <AchievementIcon />
                <ThemeSelector onThemeChange={onThemeChange} themeName={themeName} />
            </Box>

            <Divider sx={{ backgroundColor: theme.palette.primary.btnColor, width: "100%", height: "1px" }} />
        </>
    );
};

export default Navbar;
