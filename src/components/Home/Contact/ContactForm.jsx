import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import CustomTextField from "./CutomTextField"; // Your custom wrapper
import { Formik, Form } from "formik";
import { initialValues, validationSchema } from "../../../constant/constant";

const ContactForm = () => {
    const theme = useTheme();

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log("Form Data:", values);
                alert("Form Submitted Successfully ✅");
            }}
        >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "8px",
                    border: `1px solid ${theme.palette.secondary.cardborder}`,
                }}>
                    <Typography
                        variant="h6"
                        sx={{ color: theme.palette.primary.contrastText, mb: 2 , mt:2 }}
                    >
                        Contact Us
                    </Typography>

                    {/* Custom fields linked with Formik */}
                    <CustomTextField name="name" placeholder="Your Name" />
                    <CustomTextField name="email" placeholder="Your Email" />
                    <CustomTextField name="phone" placeholder="Your Phone" />
                    <CustomTextField
                        name="message"
                        placeholder="Your Message"
                        multiline={true}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            marginTop: "1rem",
                            backgroundColor: `${theme.palette.primary.Mbtn}`,
                            color: `${theme.palette.primary.contrastText}`,
                            textTransform: "none",
                            padding: "0.75rem 1.5rem",
                            mb: 2,
                            borderRadius: "4px",
                            "&:hover": {
                                backgroundColor: `${theme.palette.primary.btnHover}`,
                            }
                        }}
                    >
                        Send Message
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
