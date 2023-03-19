import {
  Box,
  Container,
  Divider,
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
import PrimaryAnim from "../components/PrimaryAnim";
function Footer() {
  const container = useRef(null);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      autoplay: true,
      autoplay: true,
      animationData: require("../public/contactus.json"),
    });
    return () => instance.destroy();
  }, []);
  return (
    <div style={{ background: "#F3ECEA" }}>
      <Container sx={{ py: "80px" }}>
        <Stack
          direction={{ xs: "column", sm: "row", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box
            sx={{ width: { xs: "100%", sm: "50%", md: "50%" } }}
            ref={container}
          ></Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "50%", md: "50%" },
            }}
          >
            <Typography variant="h2" fontWeight={900}>
              <span style={{ color: "#59BBFE" }}>Contact</span> Us
            </Typography>
            <List dense>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Phone"
                  secondary={
                    <Typography
                      href="tel:+8801623218618"
                      component="a"
                      style={{ color: "#A19F90" }}
                    >
                      +8801623218618
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Email"
                  secondary={
                    <Typography
                      href="mailto:finalyearprojecthelp@gmail.com"
                      component="a"
                      style={{ color: "#A19F90" }}
                    >
                      appsebaxyz@gmail.com
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary="WhatsApp"
                  secondary={
                    <Typography
                      href="https://wa.me/+8801623218618"
                      component="a"
                      style={{ color: "#A19F90" }}
                    >
                      +8801623218618
                    </Typography>
                  }
                />
              </ListItem>
            </List>
            <PrimaryAnim />
          </Box>
        </Stack>
        <Divider
          sx={{ width: "95%", margin: "auto", marginY: "50px" }}
        ></Divider>
        <Typography sx={{ textAlign: "center", pb: "10px" }}>
          Copyright © {new Date().getFullYear()} AppSeba
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
