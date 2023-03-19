import { Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import technologyItems from "../utils/technologyIcons.js";
import Marquee from "react-fast-marquee";
export default function TechnologyLove() {
  return (
    <Container sx={{ height: "500px", paddingY: "60px" }}>
      <Typography
        variant="bold"
        component="h1"
        sx={{
          textAlign: "center",
          fontSize: "35px",
          fontWeight: 900,
          my: "40px",
        }}
      >
        Technology Love
      </Typography>
      <Marquee gradient={false}>
        {technologyItems.map((item) => (
          <Image
            key={item.id}
            src={item.img}
            alt={item.title}
            quality={100}
            height={80}
            width={100}
            style={{ margin: "10px" }}
          />
        ))}
      </Marquee>

    </Container>
  );
}
