import { Container } from "@mui/material";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
function SecondaryAnim() {
  const container = useRef(null);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      autoplay: true,
      autoplay: true,

      animationData: require("../public/secondaryAnim.json"),
    });
    return () => instance.destroy();
  }, []);
  return (
    <Container>
      <p style={{ width: "150px" }} ref={container}></p>
    </Container>
  );
}

export default SecondaryAnim;
