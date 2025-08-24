import { Box, Container, Typography, useTheme } from '@mui/material'
import React from 'react'
import GalleryCard from '../../components/Gallery/GalleryCard';
import { gallery } from '../../constant/constant';

const Gallery = () => {
  const theme = useTheme();
  return (
    <Container sx={{ marginTop: "0.5rem", }}>
      <Typography
        sx={{
          fontFamily: "inherit",
          color: theme.palette.primary.contrastText,
          fontWeight: "700",
          fontSize: { xs: "1.5rem", md: "1.8rem", lg: "1.8rem" },
        }}
      >
        Gallery
      </Typography>
      <Typography
        sx={{
          fontFamily: "inherit",
          color: theme.palette.secondary.cardTextcolor,
          fontWeight: "400",
          fontSize: { xs: "1rem", md: "1rem", lg: "0.9rem" },
          maxWidth: "960px",
          marginTop: "1rem",
        }}
      >
        Explore the vibrant life at Little Explorers Kindergarten through our gallery of activities and events.
      </Typography>

      <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: {xs:"center", sm: "center", md: "center" , lg:"flex-start" },
      }}>
        {
          gallery?.map((item, index) => (
            <GalleryCard key={index} item={item} />
          ))
        }
      </Box>

    </Container>
  )
}

export default Gallery