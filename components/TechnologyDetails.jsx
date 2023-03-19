import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import SecondaryAnim from "../components/SecondaryAnim";
function TechnologyDetails() {
  const container = useRef(null);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      autoplay: true,
      autoplay: true,
      animationData: require("../public/letastAnim.json"),
    });
    return () => instance.destroy();
  }, []);
  return (
    <Container>
      <Stack
        direction={{ xs: "column", sm: "row", md: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Box
          sx={{ width: { xs: "100%", sm: "40%", md: "40%" } }}
          ref={container}
        ></Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "60%", md: "60%" },
          }}
        >
          <Typography variant="h2" fontWeight={900}>
            <span style={{ color: "#59BBFE" }}>Letast</span> Technology
          </Typography>
          <List dense>
            <ListItem disablePadding>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Mobile Development" secondary="Flutter" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="Web Development"
                secondary="JavaScript, React.js and Next,js"
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="Back-End"
                secondary="Node.js, Express.js, Mongodb and SQL Database"
              />
            </ListItem>
          </List>
          <SecondaryAnim />
        </Box>
      </Stack>
    </Container>
  );
}

export default TechnologyDetails;
