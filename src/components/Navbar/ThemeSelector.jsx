import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const THEMES = ["light", "dark", "green", "red", "yellow"];

export default function ThemeSelector({ themeName, onThemeChange }) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const handleThemeChange = (e) => {
    onThemeChange(e.target.value)
    localStorage.setItem("appTheme", e.target.value);
  }

  const swatch = {
    light: "#1976d2",
    dark: "#90caf9",
    green: "#2e7d32",
    red: "#d32f2f",
    yellow: "#ffeb3b",
  };

  return (
    <FormControl
      size="small"
      sx={{
        minWidth: isXs ? 60 : 140,
        bgcolor: theme.palette.background.paper,
        borderRadius: "12px",
        boxShadow: `0 2px 6px ${theme.palette.primary.btnHover}`,
        "& .MuiInputLabel-root": {
          color: theme.palette.primary.contrastText,
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
        },
      }}
    >
      {!isXs && (
        <InputLabel id="theme-select-label" sx={{ fontSize: "0.9rem", fontWeight: 500 }}>
          Theme
        </InputLabel>
      )}
      <Select
        labelId="theme-select-label"
        value={themeName}
        onChange={handleThemeChange} 
        displayEmpty={isXs}
        sx={{
          borderRadius: "12px",
          color: theme.palette.primary.contrastText,   // ✅ text color change
          "& .MuiSelect-icon": {
            color: theme.palette.primary.contrastText, // ✅ arrow icon color change
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.contrastText, // ✅ border color change
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
          },
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            py: isXs ? 0.5 : 1,
          },
        }}
      >

        {THEMES.map((name) => (
          <MenuItem
            key={name}
            value={name}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontWeight: 500,
              color: theme.palette.primary.contrastText,
              "&:hover": {
                bgcolor: theme.palette.action.hover,
              },
            }}
          >
            <Box
              sx={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                bgcolor: swatch[name],
                color: theme.palette.primary.contrastText,
                border: "2px solid #fff",
                boxShadow: "0 0 4px rgba(0,0,0,0.3)",
              }}
            />
            {!isXs && name.charAt(0).toUpperCase() + name.slice(1)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
