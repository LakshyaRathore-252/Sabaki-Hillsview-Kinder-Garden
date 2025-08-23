import { Box, useTheme } from "@mui/material";
import React from "react";

const AchievementIcon = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        maxWidth: "480px",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: "0.5rem",
        height: "2.5rem",
        backgroundColor: theme.palette.primary.btnColor,
        color: theme.palette.primary.contrastText,
        gap: "0.5rem",
        fontSize: "0.875rem",
        fontWeight: "bold",
        lineHeight: "1.5",
        letterSpacing: "0.015em",
        minWidth: 0,
        px: "0.625rem",
        fontFamily: "inherit",
        "&:hover": { backgroundColor: theme.palette.primary.btnHover },
      }}
    >
      <Box
        component="span"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "inherit",

        }}
        data-icon="Trophy"
        data-size="20px"
        data-weight="regular"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M232,64H208V56a16,16,0,0,0-16-16H64A16,16,0,0,0,48,56v8H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-28.49,64.64-63.51,64.9H128a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path>
        </svg>
      </Box>
    </Box>
  );
};

export default AchievementIcon;
