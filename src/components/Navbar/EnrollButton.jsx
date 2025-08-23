import { Button, useTheme } from "@mui/material";
import React from "react";

const EnrollButton = () => {
  const theme = useTheme();
  return (
    <Button
      sx={{
        backgroundColor: theme.palette.primary.btnColor,
        color: theme.palette.primary.contrastText,
        fontSize: { xs: "12px", sm: "13px", md: "14px" }, // ✅ responsive font size
        borderRadius: { xs: "6px", md: "8px" }, // ✅ smaller radius on small screens
        padding: { xs: "0.4rem 0.6rem", sm: "0.5rem 0.8rem", md: "0.6rem 1.2rem" }, // ✅ responsive padding
        textTransform: "none",
        fontWeight: 500,
        fontFamily: "inherit",
        cursor: "pointer",
        transition: "all 0.3s ease", // ✅ smooth hover
        "&:hover": {
          backgroundColor: theme.palette.primary.btnHover,
          transform: "scale(1.05)", // ✅ subtle grow on hover
        },
      }}
    >
      Enroll Now
    </Button>
  );
};

export default EnrollButton;
