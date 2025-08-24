import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material';
import React from 'react'

const VisionMission = ({ textSize, headingSize, heading , para , maxiWidth }) => {
    const theme = useTheme();

    return (
        <Box sx={{ marginTop: "3.5rem" }}>
            <Typography sx={{
                fontFamily: "inherit",
                color: theme.palette.primary.contrastText,
                fontWeight: "700",
                fontSize: headingSize || { xs: "1.5rem", md: "1.5rem", lg: "1.5rem" },
                marginTop: { xs: "2rem", md: "2rem", lg: "0.5rem" }
            }}>
                {heading ? heading : "Our Vision & Mission"}
            </Typography>

            <Typography
                sx={{
                    fontFamily: "inherit",
                    color: theme.palette.primary.contrastText,
                    width: "100%",
                    textAlign: "justify",
                    fontWeight: "400",
                    fontSize: textSize || "18px",
                    marginTop: { xs: "1rem", md: "1rem", lg: "0.5rem" },
                    maxWidth: maxiWidth ? maxiWidth : "100%",
                }}>
           {para ? para : "Our vision is to be a leading early childhood education provider, recognized for our commitment to excellence and innovation. Our mission is to create a nurturing and stimulating environment that empowers children to reach their full potential, fostering a lifelong love of learning and preparing them for future success."}
            </Typography>
        </Box>
    )
}

export default VisionMission