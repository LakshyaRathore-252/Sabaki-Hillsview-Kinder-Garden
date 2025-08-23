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
            width: { xs: '350px', sm: '350px', md: '350px' },
            height: { xs: '200px', sm: '200px', md: '200px' },
            backgroundColor: theme.palette.secondary.cardbg,
            border: `1px solid ${theme.palette.secondary.cardborder}`
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