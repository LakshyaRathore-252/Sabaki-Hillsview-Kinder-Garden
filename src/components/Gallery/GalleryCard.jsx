import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const GalleryCard = ({ item }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        marginTop: "2rem",
        
      }}
    >
      {/* Title */}
      <Typography
        component="h3"
        sx={{
          fontFamily: "inherit",
          color: theme.palette.primary.contrastText,
          fontWeight: "700",
          fontSize: { xs: "16px", sm: "18px", md: "20px" }, 
          mb: 2,
        }}
      >
        {item?.title}
      </Typography>

      {/* Responsive Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)", 
            sm: "repeat(3, 1fr)", 
            md: "repeat(4, 1fr)", 
            lg: "repeat(5, 1fr)", 
          },
          gap: { xs: 1.5, sm: 2, md: 2.5 }, 
          width: "100%",
          // placeItems: "center",
        }}
      >
        {item.img.map((imgSrc, index) => (
          <Box
            component="img"
            key={index}
            src={imgSrc}
            alt={`${item.title}-${index}`}
            sx={{
              aspectRatio: "1 / 1",
              width: "100%",
              maxWidth: { xs: "140px", sm: "160px", md: "180px", lg: "200px" },
              borderRadius: "12px",
              objectFit: "cover", 
              boxShadow: 2,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)", // hover effect
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default GalleryCard;
