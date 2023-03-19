import Layout from "../../../../components/Layout";
import {
  Box,
  Paper,
  Container,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import PrimaryAnim from "../../../../components/PrimaryAnim";
import Registration from "../../../../components/Registration";
import CourseDetails from "../../../../components/CourseDetails";
import { useRouter } from "next/router";
export default function Index() {
  const container = useRef(null);
  const router = useRouter();
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      autoplay: true,
      autoplay: true,
      animationData: require("/public/course.json"),
    });
    return () => instance.destroy();
  }, []);
  return (
    <Layout pageTitle={"Course Registration"}>
      <div
        style={{ backgroundImage: "linear-gradient(180deg,#7DE6E1,#FFFFFF)" }}
      >
        <Container sx={{ pt: "5px" }}>
          <Typography variant="h3" fontWeight={700}>
            {"Development Keep Simple"}
            <span style={{ color: "#DF6E57" }}> With Latest</span> Technology
          </Typography>
          <Typography variant="h5">
            সব থেকে সহজ উপায়ে একদম শুন্য থেকে জব রেডি Web Development শিখতে
            Registration করুন এক্ষুনি!
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            mt={1}
          >
            <Box
              sx={{
                display: "grid",
                placeContent: "center",
                width: { xs: "100%", sm: "50%", md: "50%" },
              }}
            >
              <p ref={container}></p>{" "}
            </Box>
            <Paper
              sx={{
                width: { xs: "100%", sm: "50%", md: "50%" },
                p: "25px",
                border: "5px solid #24A8AF",
                borderRadius: "10px",
              }}
            >
              <Registration />
            </Paper>
          </Stack>
          <Typography align="right" mt={5}>
            <Button
              onClick={() => router.push("/academy/course/login")}
              variant="contained"
              sx={{ textTransform: "none" }}
            >
              Already registered? Login
            </Button>
          </Typography>
        </Container>
      </div>
      <Container sx={{ pb: "20px" }}>
        <PrimaryAnim />
        <CourseDetails />
        <Box
          sx={{
            p: "20px",
            mt: "50px",
            borderRadius: "4px",
            backgroundColor: "#89E9E4",
          }}
        >
          <Typography>
            আমার এই Course টি বাজারের কোচিং সেন্টার গুলোর মত নয় ভর্তি হলেন ক্লাস
            করলেন বাট দিন শেষে কিছুই শিখা হল নাহ। আমার মূল টার্গেট হল আপনাকে
            শিখানো। আশা রাখি Course শেষে আপনি বলতে পারবেন আমি এখন পারি। এবং এটাই
            আমার উদ্দেশ্য।
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
