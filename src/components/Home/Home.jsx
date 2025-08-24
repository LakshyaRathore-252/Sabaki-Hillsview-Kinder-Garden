import { Box, Button, Container, Typography, useTheme } from '@mui/material'
import React from 'react'
import HeroSection from './HeroSection';
import Cards from './Cards/Cards';
import Chart from './chart/chart';
import UpdateSection from './Updates/UpdateSection';

const Home = () => {
  const theme = useTheme();
  return (

    <Container sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <HeroSection />
      <Box sx={{ display: "flex", justifyContent: "start", alignItems: "start", textAlign: "start", flexWrap: "wrap", flexDirection: "column" }}>
        <Typography sx={{ fontFamily: "inherit", color: theme.palette.primary.contrastText, fontWeight: "600", fontSize: { xs: "1.5rem", md: "1.8rem", lg: "1.8rem" }, marginTop: { xs: "2rem", md: "2rem", lg: "4rem" } }}>
          Why Choose Sabaki Hillsview Kinder Garten?
        </Typography>

        <Box sx={{ marginTop: "1.5rem" }}>
          <Typography sx={{
            fontFamily: "inherit",
            color: theme.palette.primary.contrastText,
            fontWeight: "900",
            fontSize: { xs: "2rem", md: "2rem", lg: "2.5rem" },
            marginTop: { xs: "2rem", md: "2rem", lg: "0.5rem" }
          }}>
            Our Unique Approach
          </Typography>

          <Typography sx={{
            fontFamily: "inherit",
            color: theme.palette.primary.contrastText,
            maxWidth: "840px",
            textAlign: "justify",
            fontWeight: "400",
            fontSize: "18px",
            marginTop: { xs: "1rem", md: "1rem", lg: "1rem" }
          }}>
            We offer a comprehensive early childhood education program that goes beyond traditional academics. Our curriculum integrates music, swimming, and nutritious meals to support the overall development of each child.
          </Typography>
        </Box>
      </Box>
      <Cards />

      <Box sx={{ marginTop: "3.5rem" }}>
        <Typography sx={{
          fontFamily: "inherit",
          color: theme.palette.primary.contrastText,
          fontWeight: "700",
          fontSize: { xs: "1.5rem", md: "1.5rem", lg: "1.5rem" },
          marginTop: { xs: "2rem", md: "2rem", lg: "0.5rem" }
        }}>
          Our Vision & Mission
        </Typography>

        <Typography
          sx={{
            fontFamily: "inherit",
            color: theme.palette.primary.contrastText,
            width: "100%",
            textAlign: "justify",
            fontWeight: "400",
            fontSize: "18px",
            marginTop: { xs: "1rem", md: "1rem", lg: "0.5rem" }
          }}>
          Our vision is to be a leading early childhood education provider, recognized for our commitment to excellence and innovation. Our mission is to create a nurturing and stimulating environment that empowers children to reach their full potential, fostering a lifelong love of learning and preparing them for future success.
        </Typography>
      </Box>

      <Box sx={{ marginTop: "2.5rem" }}>
        <Chart />
      </Box>

      <Box sx={{ marginTop: "2.5rem" }}>
        <Typography
          sx={{
            fontFamily: "inherit",
            color: theme.palette.primary.contrastText,
            width: "100%",
            textAlign: "justify",
            fontWeight: "500",
            fontSize: { xs: "1.5rem", md: "1.5rem", lg: "1.5rem" },
          }}>
          News & Updates
        </Typography>
        <UpdateSection />
      </Box>


    </Container>
  )
}

export default Home