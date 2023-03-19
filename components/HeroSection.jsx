import { Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import PrimaryAnim from "../components/PrimaryAnim";
function Hero() {
  const container = useRef(null);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      autoplay: true,
      autoplay: true,
      animationData: require("../public/heroAnim.json"),
    });
    return () => instance.destroy();
  }, []);
  return (
    <Stack
      direction={{ xs: "column-reverse", sm: "row", md: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <div>
        <PrimaryAnim />
        <Typography variant="h2" fontWeight={900}>
          {"Let's Integrate"}
          <span style={{ color: "#59BBFE" }}>Your Idia</span> With Technology
        </Typography>
        <Typography>
          We provide best web and mobile applications development services with
          latest techonology and experter for your next project and product.
        </Typography>
      </div>
      <div ref={container}></div>
    </Stack>
  );
}
export default Hero;
