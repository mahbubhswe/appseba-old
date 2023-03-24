import {
  Button,
  Container,
  Divider,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import Profile from "../../../../components/Profile";
import ProfilePageAnim from "../../../../components/ProfilePageAnim";
import React from "react";
import { useLocalStorage, deleteFromStorage } from "@rehooks/local-storage";
import dynamic from "next/dynamic";
import moment from "moment/moment";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Cookies from "js-cookie";
import Head from "next/head";
function UserProfile() {
  const [userInfo] = useLocalStorage("userInfo");
  return (
    <React.Fragment>
      <Head>
        <title>Welcome to profile</title>
      </Head>
      <div
        style={{ backgroundImage: "linear-gradient(180deg,#7DE6E1,#FFFFFF)" }}
      >
        <Container sx={{ pt: "20px" }} maxWidth="md">
          <Typography align="center" fontSize={50} fontWeight={800}>
            <Typewriter
              options={{
                strings: ["Welcome....!"],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
          <Paper sx={{ px: "20px", py: "10px" }}>
            <center>
              <Profile />
            </center>
            <Divider>
              <Typography fontWeight={800} fontSize={20}>
                <strong>{userInfo ? userInfo.name : null}</strong>
              </Typography>
            </Divider>

            <Typography>
              Phone: <strong>{userInfo ? userInfo.phone : null}</strong>
            </Typography>
            <Typography>
              Email:{" "}
              <strong>
                {userInfo ? userInfo.email : null} (
                <span style={{ color: "green", fontWeight: 900 }}>
                  Verifyed
                </span>
                )
              </strong>
            </Typography>
            <Typography>
              Address: <strong>{userInfo ? userInfo.address : null}</strong>
            </Typography>
            <Typography>
              Payable: <strong>6000 tk</strong>
            </Typography>
            <Typography>
              Paid: <strong>{userInfo ? userInfo.paidAmount : null} tk</strong>
            </Typography>
            <Typography>
              Due:{" "}
              <strong>{userInfo ? 6000 - userInfo.paidAmount : null} tk</strong>
            </Typography>
            <Typography>
              Joined:{" "}
              <strong>
                {userInfo
                  ? moment(userInfo.createdAt).format("MMM Do YY")
                  : null}
              </strong>
            </Typography>
            <br></br>
            <div
              style={{
                border: "1px dashed #ccc",
                padding: "10px",
                borderRadius: "4px",
              }}
            >
              <ListItemText
                primary="How to pay?"
                secondary=<Typography>
                  From your bKash account . Send money to 01623218618 and then
                  send your transection id and this (
                  {userInfo ? userInfo.phone : null}) phone number send to
                  <Link href="https://wa.me/01623218618"> WhatsApp</Link>. Wait
                  some time, automatically update your paid amount.
                </Typography>
              />
            </div>

            <br></br>
            <Button
              variant="contained"
              onClick={() => {
                deleteFromStorage("userInfo");
                Cookies.remove("token");
                window.location.reload();
              }}
              color="error"
              size="small"
            >
              Logout
            </Button>
          </Paper>
        </Container>

        <ProfilePageAnim />
      </div>
    </React.Fragment>
  );
}
export default dynamic(() => Promise.resolve(UserProfile), {
  ssr: false,
});
