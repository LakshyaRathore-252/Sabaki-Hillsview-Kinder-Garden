import { Box, Container, Typography, useTheme } from '@mui/material'
import React from 'react'
import { use } from 'react'
import VisionMission from '../../components/Home/VisionMission';
import Cards from '../../components/Home/Cards/Cards';
import TeamCards from '../../components/About/TeamCards/TeamCards';

const About = () => {
    const theme = useTheme();
    return (
        <Container sx={{ marginTop: "0.5rem", }} >
            <Typography
                sx={{
                    fontFamily: "inherit",
                    color: theme.palette.primary.contrastText,
                    fontWeight: "700",
                    fontSize: { xs: "1.5rem", md: "1.8rem", lg: "1.8rem" },
                }}
            >
                About Us
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
                Little Sprouts Kindergarten is dedicated to providing a nurturing and stimulating environment where children can grow, learn, and thrive. Our mission is to foster a love of learning, encourage creativity, and develop well-rounded individuals prepared for future success.

            </Typography>

            {/*Our Vision  */}
            <VisionMission textSize={"16px"} headingSize={"22px"} maxiWidth={"960px"}
                para={"To be the leading kindergarten in the region, recognized for our innovative programs, exceptional educators, and commitment to excellence in early childhood education. We envision a future where every child who attends Little Sprouts leaves with a strong foundation for lifelong learning and personal growth."}
            />

            {/* Our Values */}
            <VisionMission textSize={"16px"} headingSize={"22px"}
                heading={"Our Values"}
                para={"At Little Sprouts, we are guided by the following core values: * **Child-Centered Approach:** We prioritize the individual needs and interests of each child, creating a supportive and inclusive environment where they can flourish. * **Excellence in Education:** We are committed to providing high-quality educational programs that promote cognitive, social, emotional, and physical development. * **Passionate Educators:** Our team of experienced and dedicated teachers are passionate about early childhood education and committed to nurturing each child's potential. * **Safe and Nurturing Environment:** We provide a safe, secure, and stimulating environment where children feel comfortable, supported, and encouraged to explore. * **Partnership with Families:** We believe in strong partnerships with families, working together to support each child's growth and development."}
            />

            {/* Unique Features */}

            <Box
                sx={{
                    marginTop: "2rem",
                }}
            >

                <Typography
                    sx={{
                        fontFamily: "inherit",
                        color: theme.palette.primary.contrastText,
                        fontWeight: "700",
                        fontSize: "22px",
                    }}
                >
                    Unique Features
                </Typography>

                <Cards />

            </Box>

            {/* OUR Team */}
            <Box
                sx={{
                    marginTop: "2rem",
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "inherit",
                        color: theme.palette.primary.contrastText,
                        fontWeight: "700",
                        fontSize: "22px",
                    }}
                >
                    Our Team
                </Typography>
                <TeamCards />

            </Box>

        </Container>
    )
}

export default About