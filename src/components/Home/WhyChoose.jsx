import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const WhyChoose = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: "2rem" }}>
      <Typography
        sx={{
          fontFamily: "inherit",
          color: theme.palette.primary.contrastText,
          fontWeight: "600",
          fontSize: { xs: "1.5rem", md: "1.8rem", lg: "1.8rem" },
          mt: { xs: "2rem", lg: "4rem" },
        }}
      >
        Why Choose Sabaki Hillsview Kinder Garten?
      </Typography>

      <Box sx={{ mt: "2.5rem" }}>
        <Typography
          sx={{
            fontFamily: "inherit",
            color: theme.palette.primary.contrastText,
            fontWeight: "900",
            fontSize: { xs: "2rem", lg: "2.5rem" },
          }}
        >
          Our Unique Approach
        </Typography>

        <Typography
          sx={{
            fontFamily: "inherit",
            color: theme.palette.primary.contrastText,
            maxWidth: "840px",
            textAlign: "justify",
            fontWeight: "400",
            fontSize: "18px",
            mt: "1rem",
          }}
        >
          We offer a comprehensive early childhood education program that goes
          beyond traditional academics. Our curriculum integrates music,
          swimming, and nutritious meals to support the overall development of
          each child.
        </Typography>
      </Box>
    </Box>
  );
};

export default WhyChoose;
