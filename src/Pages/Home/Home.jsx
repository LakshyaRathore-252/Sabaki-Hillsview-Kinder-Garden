import { Box, Button, Container, Divider, Typography, useTheme } from '@mui/material'
import React from 'react'
import HeroSection from '../../components/Home/HeroSection';
import Cards from '../../components/Home/Cards/Cards';
import Chart from '../../components/Home/chart/chart';
import UpdateSection from '../../components/Home/Updates/UpdateSection';
import ContactForm from '../../components/Home/Contact/ContactForm';
import Footer from '../../components/Footer/Footer';
import WhyChoose from '../../components/Home/WhyChoose';
import VisionMission from '../../components/Home/VisionMission';

const Home = () => {
  const theme = useTheme();
  return (
    <>
      <Container sx={{ marginTop: "2.5rem" }}>


        <HeroSection />

        <WhyChoose />

        <Cards />
        
        <VisionMission />



        {/* Charts */}
        <Box sx={{ marginTop: "2.5rem" }}>
          <Chart />
        </Box>

        {/* NEWS & UPDATES */}
        <Box sx={{ marginTop: "2.5rem" }}>
          <Typography
            sx={{
              fontFamily: "inherit",
              color: theme.palette.primary.contrastText,
              width: "100%",
              textAlign: "justify",
              fontWeight: "700",
              fontSize: { xs: "1.5rem", md: "1.5rem", lg: "1.5rem" },
            }}>
            News & Updates
          </Typography>
          <UpdateSection />
        </Box>

        {/* Contact Us Form */}
        <Box sx={{ marginTop: "2.5rem", }}>
          <ContactForm />
        </Box>

      </Container>

    </>
  )
}

export default Home