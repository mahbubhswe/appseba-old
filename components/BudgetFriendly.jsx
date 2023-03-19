import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import SecondaryAnim from "../components/SecondaryAnim";
function BudgetFriendly() {
  const container = useRef(null);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      autoplay: true,
      autoplay: true,
      animationData: require("../public/budgetAnimation.json"),
    });
    return () => instance.destroy();
  }, []);
  return (
    <div style={{ background: "#F9FFFB" }}>
      <Container>
        <Stack
          direction={{ xs: "column-reverse", sm: "row", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          py={10}
        >
          <div>
            <SecondaryAnim />
            <Typography variant="h2" fontWeight={900}>
              {"Get's Started With "}
              <span style={{ color: "#59BBFE" }}>Budget Friendly</span> Service
            </Typography>
            <Typography>
              We provide budget friendly service for our customer with ensuring
              heigh quality. We are welcomed you.
            </Typography>
          </div>
          <div ref={container}></div>
        </Stack>
      </Container>
    </div>
  );
}
export default BudgetFriendly;
