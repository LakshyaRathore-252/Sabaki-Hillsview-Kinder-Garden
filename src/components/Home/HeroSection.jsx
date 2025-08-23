import { Box, Button, Typography, useTheme } from '@mui/material'
import React from 'react'

const HeroSection = () => {
    const theme = useTheme();
    return (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr", lg: "1fr 1fr" }, alignItems: "start", gap: 5 }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: { xs: "start", md: "center", lg: "flex-start" } }} >
                <img style={{ maxWidth: "810px", width: "100%", borderRadius: "8px" }} src={"https://media.istockphoto.com/id/824740546/photo/portrait-of-confidence-girl-painting-on-canvas.jpg?s=612x612&w=0&k=20&c=PJV514d-V4W4PR0B2gQ29aheIDVe3rXSllKWxWX-LnY="}
                    alt='Students Painting'
                />
            </Box>
            <Box sx={{ color: theme.palette.primary.contrastText, fontFamily: 'inherit', display: "flex", justifyContent: { xs: "start", md: "center", lg: "flex-start" }, alignItems: { xs: "start", md: "center", lg: "flex-start" }, flexDirection: "column", textAlign: { xs: "center", md: "center", lg: "justify" }, gap: 1 }}>
                <Typography sx={{ fontSize: { xs: '2rem', md: '3rem', lg: '40px' }, fontWeight: '900', textAlign: "start" }}>Nurturing Young Minds, Building Bright Futures</Typography>
                <Typography sx={{ letterSpacing: "1px", display: "flex", flexWrap: "wrap", textAlign: "start" }} >At Sabaki Hillsview
                    Kinder Garten, we provide a stimulating and supportive environment where children can learn, grow, and thrive. Our holistic approach focuses on developing essential skills through play-based learning, fostering creativity, curiosity, and a lifelong love of learning.</Typography>
                <Button fullWidth
                    sx={{
                        marginTop: { xs: "1rem", md: "1rem", lg: "2rem" },
                        padding: "1rem 2rem",
                        backgroundColor: theme.palette.primary.Mbtn,
                        color: theme.palette.primary.contrastText,
                        "&:hover": { backgroundColor: theme.palette.primary.btnHover }
                    }}>
                    Explore Our Programs
                </Button>
            </Box>

        </Box>
    )
}

export default HeroSection