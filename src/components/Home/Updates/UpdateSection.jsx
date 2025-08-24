import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

const UpdateSection = () => {
    const theme = useTheme();
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "start",
            flexWrap: "wrap",
            flexDirection: { xs: "column", md: "row", lg: "row" },
            gap: { xs: "1.5rem", md: "0", lg: "0" },
            marginTop: { xs: "2.5rem", sm: "2.5rem", md: "2.5rem", lg: "0" }
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                textAlign: "start",
                gap: { xs:"1rem",sm: "0.5rem", md: "0.5rem", lg: "0.3rem" }
            }}>
                <Typography sx={{
                    fontFamily: "inherit",
                    fontWeight: "600",
                    fontSize: { xs: "1rem", md: "1rem", lg: "1rem" },
                    color: `${theme.palette.secondary.cardTextcolor}`
                }}>
                    Latest News
                </Typography>
                <Typography sx={{
                    fontFamily: "inherit",
                    fontWeight: "600",
                    fontSize: { xs: "1.2rem", md: "1.2rem", lg: "1.2rem" },
                    color: `${theme.palette.primary.contrastText}`
                }}>
                    Little Explorers Academy Announces New Summer Program
                </Typography>
                <Typography sx={{
                    fontSize: { xs: "1rem", md: "1rem", lg: "1rem" },
                    color: `${theme.palette.secondary.cardTextcolor}`,
                    maxWidth: { xs: "100%", md: "400px", lg: "800px" }
                }}>
                    We are excited to announce our new summer program, offering a variety of fun and educational activities for children aged 3-5. Enroll now to secure your child's spot!
                </Typography>
            </Box>
            <Box
                sx={{
                    maxWidth: { xs: "100%", md: "400px", lg: "300px" },
                    width: "100%",
                    marginTop: "1.5rem",
                    borderRadius: "8px",
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvirTs-2dpvvfHNbhOWiEXK8J6y912lsb0RyeyBPhGrb1BU-i7lffpfQcH3cHEX0URTpljYV-SCGFRlJ2UjWW4sY1Y6lHvDMflTkCfn83hXjGNki591tOK38pbx4SJFLrvrGpLDyVkZYxuZtx1EAnX8XuSJ4-hx5yQDJsAyRPQLKGfUh_37_D4BZPcaaU_E--9sA18w8W-XAmhNdG9xUsyQx-tQPCHMtoJB_WBEfaVNt1cARp5RuwFyJ-Ukkdv9acOSja2h1OTXxkQ")`,
                    backgroundSize: "cover",
                    aspectRatio: "16/9",
                    backgroundPosition: "center",
                    flex: 1,
                }}
            ></Box>



        </Box >
    )
}
export default UpdateSection