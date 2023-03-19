import {
  Backdrop,
  Button,
  CircularProgress,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import Cookies from "js-cookie";
import React, { useState } from "react";
import axios from "axios";
import { writeStorage } from "@rehooks/local-storage";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Head from "next/head";
export default function Login() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showHidePassword, setShowHidePassword] = React.useState(false);

  const router = useRouter();
 
  //user login
  const hubmitHandler = async (e) => {
    e.preventDefault();
    setOpen(true);
    const { data } = await axios.post(`/api/course/login`, {
      email,
      password,
    });
    setOpen(false);
    if (email == data.email) {
      e.target.reset();
      writeStorage("userInfo", data);
      Cookies.set("token", data.token);
      router.replace("/academy/course/profile");
    } else {
      Swal.fire("Failed to login", data, "error");
    }
  };
  return (
    <React.Fragment>
      <Head>
        <title>Login to your profile</title>
      </Head>
      <div
        style={{ backgroundImage: "linear-gradient(180deg,#7DE6E1,#FFFFFF)" }}
      >
        <Container maxWidth="sm" sx={{ pt: "150px" }}>
          <Paper sx={{ p: "50px" }}>
            <Stack spacing={1} component="form" onSubmit={hubmitHandler}>
              <Divider sx={{ fontSize: "20px" }}>
                Please, sign in to continue
              </Divider>
              <TextField
                type="email"
                size="small"
                color="secondary"
                variant="outlined"
                fullWidth
                placeholder="Enter email address"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                className="styleTextField"
                size="large"
                variant="standard"
                type={showHidePassword ? "text" : "password"}
                placeholder="Password"
                required
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={(e) => setShowHidePassword(!showHidePassword)}
                      >
                        {showHidePassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  size="medium"
                  variant="contained"
                  sx={{
                    width: "120px",
                    backgroundColor: "#47A7FF",
                    color: "#FFFFFF",
                  }}
                  type="submit"
                >
                  Sign In
                </Button>
              </div>
              <Link href="/academy/course/password-recovery">
                Forgot password?
              </Link>
              <Backdrop open={open}>
                <CircularProgress color="inherit" />
              </Backdrop>
            </Stack>
          </Paper>
        </Container>
      </div>
    </React.Fragment>
  );
}
