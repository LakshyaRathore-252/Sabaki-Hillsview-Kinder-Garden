import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About us" },
  { to: "/gallery", text: "Gallery" },
  { to: "/contact", text: "Contact us" },
];

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
          component={Link}
          to={item.to}
          sx={{
            fontSize: "15px",
            fontWeight: bold,
            textDecoration: "none",
            color: theme.palette.primary.contrastText,
            fontFamily: "inherit",
            "&:hover": { color: theme.palette.primary.btnHover },
          }}
        >
          {item.text}
        </Typography>
      ))}

    </Box>
  );
};

export default NavLinks;
