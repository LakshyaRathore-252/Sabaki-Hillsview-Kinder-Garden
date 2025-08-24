import { Box, Divider, Typography, useTheme } from '@mui/material'
import React from 'react'
import NavLinks from '../Navbar/NavLinks';

const Footer = () => {
    const theme = useTheme();
    return (
        <>
            <Divider sx={{ backgroundColor: theme.palette.primary.btnColor, width: "100%", height: "1px", marginTop: "0.5rem" }} />
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem 0" }}>
                <NavLinks pos='center' bold='400' />
                <Typography variant="body2" sx={{ color: theme.palette.secondary.cardTextcolor , marginTop: "0.8rem", fontSize: "0.8rem" }}>
                    © 2023 Kinder Garden School. All rights reserved.
                </Typography>
            </Box>

        </>
    )
}

export default Footer