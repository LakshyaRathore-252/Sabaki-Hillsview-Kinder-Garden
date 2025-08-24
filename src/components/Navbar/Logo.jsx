import { Box, Typography, useTheme } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        flex: 1,
        cursor: "pointer",
      }}
      onClick={() => navigate("/")}
    >
      <SchoolIcon sx={{ color: theme.palette.primary.contrastText }} />
      <Typography
        variant="h6"
        sx={{
          color: theme.palette.primary.contrastText,
          ml: 1,
          display: "flex",
          flexDirection: "column",
          fontFamily: "inherit",
          fontSize: { xs: "0.7rem", sm: "1.25rem", md: "1.5rem" },
        }}
      >
        Sabaki Hillsview
        <Typography
          component="span"
          sx={{
            fontFamily: "inherit",
            fontSize: { xs: "0.6rem", sm: "0.75rem", md: "0.85rem" },
            lineHeight: 1.2,
          }}
        >
          Kinder Garten
        </Typography>
      </Typography>
    </Box>
  );
};

export default Logo;
