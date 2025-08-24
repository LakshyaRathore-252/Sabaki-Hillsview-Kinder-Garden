import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

const TeamCard = ({ title, desc, imgUrl }) => {
    const theme = useTheme();
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 1,
        }}
        >
            <img
                style={{
                    maxWidth: "256px",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                }}
                src={imgUrl} alt={title}
            />
            <Typography component={"h3"}
                sx={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: theme.palette.primary.contrastText,
                }}
            >
                {title}
            </Typography>
            <Typography component={"p"}
                sx={{
                    fontSize: "1rem",
                    color: theme.palette.secondary.cardTextcolor,
                    maxWidth: "300px",
                }}
            >
                {desc}</Typography>
        </Box>
    )
}

export default TeamCard