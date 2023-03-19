import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
export default function ServicesSection() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row", md: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "#F3ECEA",
        py: "100px",
        mt: "100px",
      }}
    >
      <Box>
        <Typography align="center">
          <Image
            src="/webDevelopment.png"
            height={150}
            width={150}
            quality={100}
          />
        </Typography>

        <Typography
          align="center"
          sx={{ fontSize: "21px", fontFamily: "fantasy" }}
        >
          Web Development
        </Typography>
        <Typography align="center" sx={{ color: "gray" }}>
          Faster and Responsive for Best User Experience
        </Typography>
      </Box>
      <Divider orientation="vertical" sx={{ height: "250px" }}>
        Our Services
      </Divider>
      <Box>
        <Typography align="center">
          <Image
            src="/mobileDevelopment.png"
            height={150}
            width={150}
            quality={100}
          />
        </Typography>
        <Typography
          align="center"
          sx={{ fontSize: "21px", fontFamily: "fantasy" }}
        >
          Mobile Development
        </Typography>
        <Typography align="center" sx={{ color: "gray" }}>
          Cross Platform for Android and iOS
        </Typography>
      </Box>
     
    </Stack>
  );
}
