import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const links = ["Home", "About us", "Contact us"];

const NavLinks = ({ pos = 'end', bold = '500' }) => {
  const theme = useTheme();
  return (
    <Box
      component="nav"
      sx={{
        color: theme.palette.primary.contrastText,
        fontSize: "0.9rem",
        display: { xs: "none", md: "flex" },
        gap: { xs: "1.5rem", md: "2rem" },
        flex: 1,
        justifyContent: pos,
        cursor: "pointer",
        alignItems: "center",
      }}
    >
      {links.map((item, index) => (
        <Typography
          key={index}
          component="a"
          href={`#${item.toLowerCase().replace(" ", "-")}`}
          sx={{
            fontSize: "15px",
            fontWeight: bold,
            textDecoration: "none",
            color: "inherit",
            fontFamily: "inherit",
            "&:hover": { color: theme.palette.primary.btnHover },
          }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default NavLinks;
