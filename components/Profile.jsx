import { Container } from "@mui/material";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
function PrimaryPage() {
  const container = useRef(null);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      autoplay: true,
      autoplay: true,

      animationData: require("../public/profile.json"),
    });
    return () => instance.destroy();
  }, []);
  return (
    <Container>
      <p style={{ width: "200px" }} ref={container}></p>
    </Container>
  );
}

export default PrimaryPage;
