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

      animationData: require("../public/profilePage.json"),
    });
    return () => instance.destroy();
  }, []);
  return <p style={{ width: "300px" }} ref={container}></p>;
}

export default PrimaryPage;
