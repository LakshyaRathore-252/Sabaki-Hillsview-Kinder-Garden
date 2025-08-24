import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { use } from 'react'

const Card = ({ title, desc, icon }) => {
    const theme = useTheme();
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            textAlign: 'start',
            fontFamily: 'inherit',
            p: 2,
            boxShadow: 3,
            gap: 1,
            borderRadius: 2,
            maxWidth: "350px",
            minHeight: "200px",
            backgroundColor: theme.palette.secondary.cardbg,
            border: `1px solid ${theme.palette.secondary.cardborder}`,
            "&:hover": {
                boxShadow: `0 2px 6px ${theme.palette.primary.btnHover}`,
                transform: "translateY(-2px)",

            },
        }}>
            <Typography sx={{ marginTop: '0.5rem', fontFamily: 'inherit', fontSize: '1rem', color: theme.palette.primary.contrastText }} >
                {icon}
            </Typography>
            <Typography sx={{
                fontWeight: "700",
                fontSize: "1.2rem",
                color: theme.palette.primary.contrastText
            }}>
                {title}
            </Typography>
            <Typography sx={{ color: theme.palette.secondary.cardTextcolor }}>
                {desc}
            </Typography>
        </Box>
    )
}

export default Card