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
                <Form onSubmit={handleSubmit}>
                    <Typography
                        variant="h6"
                        sx={{ color: theme.palette.primary.contrastText, mb: 2 }}
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
