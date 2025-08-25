import { useTheme } from "@emotion/react";
import { Box, TextField, Typography } from "@mui/material";
import { useField } from "formik";
import React from "react";

const CustomTextField = ({ placeholder, multiline = false, name }) => {
    const theme = useTheme();
    const [field, meta] = useField(name); // connect with Formik

    return (
        <Box sx={{ display: "flex", flexDirection: "column", mt: "1.5rem"  , width:"100%" , maxWidth:"480px"}}>
            <label
                style={{
                    color: theme.palette.primary.contrastText,
                    fontWeight: "400",
                }}
            >
                {placeholder}
            </label>
            <TextField
                variant="outlined"
                margin="normal"
                placeholder={"Enter " + placeholder}
                multiline={multiline}
                minRows={multiline ? 4 : 1}
                fullWidth
                sx={{
                    maxWidth: "480px",
                    "& .MuiInputBase-input::placeholder": {
                        color: `${theme.palette.primary.contrastText}`,
                        opacity: 1,
                    },
                }}
                InputProps={{
                    sx: {
                        bgcolor: theme.palette.secondary.barColor,
                        color: theme.palette.primary.contrastText,
                        border:"none"
                    },
                }}
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error}
                onInput={(e) => {
                    if (name === "phone") {
                        e.target.value = e.target.value.replace(/[^0-9]/g, ""); // non-digits remove
                    }
                }}
                {...field} // ✅ Formik binding
            />
        </Box>
    );
};

export default CustomTextField;
