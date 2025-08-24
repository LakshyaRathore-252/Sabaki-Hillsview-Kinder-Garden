import { Box, Tooltip, Typography, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function EnrollmentGrowth({ data }) {
  const theme = useTheme();
  const chartData = data || [
    { year: "2022", growth: 90 },
    { year: "2023", growth: 10 },
    { year: "2024", growth: 80 },
  ];

  const maxGrowth = Math.max(...chartData.map((item) => item.growth));
  const latestGrowth = chartData[chartData.length - 1]?.growth || 0;
  const sign = latestGrowth - chartData[0].growth;

  // state for animation trigger
  const [animate, setAnimate] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimate(true); // trigger animation
          observer.unobserve(entry.target); // run only once
        }
      },
      { threshold: 0.3 } // 30% visible = trigger
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) observer.unobserve(chartRef.current);
    };
  }, []);

  return (
    <Box
      ref={chartRef}
      sx={{
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        width: "100%",
        border: `1px solid ${theme.palette.secondary.chartboxborder}`,
      }}
    >
      <Typography sx={{ color: theme.palette.primary.contrastText }} variant="h6" fontWeight="bold">
        Enrollment Growth
      </Typography>
      <Typography sx={{ color: theme.palette.primary.contrastText }} variant="h3" fontWeight="bold" mt={1} mb={0.5}>
        {latestGrowth}%
      </Typography>
      <Typography color={sign > 0 ? "#08f55fff" : "#fa0303ff"} fontWeight="700" mb={3}>
        Current {sign > 0 ? "+" : ""}{sign}%
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-end",
          height: "200px",
          gap: "20px",
        }}
      >
        {chartData.map((item, index) => (
          <Box key={index} textAlign="center" flex={1} maxWidth="350px">
            <Tooltip
              title={
                <Box
                  sx={{
                    background: `${theme.palette.background.tooltipbar}`,
                    color: `${theme.palette.primary.contrastText}`,
                    p: 1,
                    borderRadius: "8px",
                    boxShadow: `0px 2px 10px ${theme.palette.background.tooltipbarshadow}`,
                  }}
                >
                  <Typography variant="body2" fontWeight="bold">
                    {item.year}
                  </Typography>
                  <Typography variant="body2">
                    Growth: {item.growth}%
                  </Typography>
                </Box>
              }
              arrow
              placement="top"
            >
              <Box
                sx={{
                  width: "100%",
                  height: animate ? `${(item.growth / maxGrowth) * 180}px` : "0px",
                  background: theme.palette.secondary.barColor,
                  borderTop: `4px solid ${theme.palette.secondary.barBorder} `,
                  borderRadius: "6px",
                  transition: `height 1s ease ${index * 0.2}s, background 0.2s`,
                  "&:hover": {
                    background: theme.palette.secondary.barHover,
                  },
                }}
              />
            </Tooltip>
            <Typography
              mt={1}
              sx={{
                color:
                  theme.palette.mode === "light"
                    ? theme.palette.primary.contrastText
                    : theme.palette.secondary.cardTextcolor,
                fontWeight: "600",
              }}
            >
              {item.year}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
