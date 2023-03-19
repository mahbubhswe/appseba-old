import {
  Backdrop,
  Button,
  CircularProgress,
  Stack,
  Step,
  StepContent,
  StepLabel,
  TextField,
  Typography,
  Stepper,
  Container,
  Paper,
} from "@mui/material";
import axios from "axios";
import MuiPhoneNumber from "material-ui-phone-number";
import Head from "next/head";
import React, { useState } from "react";
export default function Index() {
  const [code, setCode] = useState(Math.floor(100000 + Math.random() * 900000));
  const [email, setEmail] = useState();
  const [newPassword, setNewPassword] = useState();
  const [open, setOpen] = useState(false);
  const [apiRes, setApiRes] = useState();
  const [inputCode, setInputCode] = useState();
  const [checkCode, setCheckCode] = useState();
  const [activeStep, setActiveStep] = useState(0);
  const [passChangeCon, setPassChangeCon] = useState();

  //send code
  const sendVerificationCode = async (e) => {
    e.preventDefault();
    setOpen(true);
    const { data } = await axios.post(
      `/api/course/sendotp?email=${email}&code=${code}&textWithCode=Please, use this ${code} verification code to reset your password.`
    );
    setApiRes(data);
    setOpen(false);
    setActiveStep(1);
  };

  //verify code
  const verificationCode = (e) => {
    e.preventDefault();
    if (code == inputCode) {
      setActiveStep(2);
    } else {
      setApiRes();
      setCheckCode("You have inputed invalid code");
    }
  };

  //change password
  const changePassword = async (e) => {
    e.preventDefault();
    setActiveStep(3);
    setOpen(true);
    const { data } = await axios.put(`/api/course/reset-password`, {
      email: email,
      password: newPassword,
    });
    setOpen(false);
    setPassChangeCon(data);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Reset password</title>
      </Head>
      <div
        style={{ backgroundImage: "linear-gradient(180deg,#7DE6E1,#FFFFFF)" }}
      >
        <Container maxWidth="sm" sx={{ pt: "150px" }}>
          <Paper sx={{ p: "20px" }}>
            <Typography align="center" variant="bold" component="h2">
              Set New Password
            </Typography>
            <Stepper activeStep={activeStep} orientation="vertical">
              <Step>
                <StepLabel>Send code</StepLabel>
                <StepContent>
                  <Stack
                    spacing={1}
                    component="form"
                    onSubmit={sendVerificationCode}
                  >
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
                    <Button
                      disabled={email ? false : true}
                      variant="contained"
                      type="submit"
                      size="small"
                    >
                      Send code
                    </Button>
                  </Stack>
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Verify</StepLabel>
                <StepContent>
                  <Stack
                    spacing={1}
                    component="form"
                    onSubmit={verificationCode}
                  >
                    <Typography align="center" sx={{ color: "green" }}>
                      {apiRes ? apiRes : null}
                    </Typography>
                    <Typography align="center" color="error">
                      {checkCode ? checkCode : null}
                    </Typography>
                    <TextField
                      type="text"
                      size="small"
                      color="secondary"
                      label="Enter code"
                      variant="outlined"
                      placeholder="Type verification code"
                      required
                      onChange={(e) => setInputCode(e.target.value)}
                    />
                    <Button
                      disabled={inputCode ? false : true}
                      variant="contained"
                      type="submit"
                      size="small"
                    >
                      Verify code
                    </Button>
                  </Stack>
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Change password</StepLabel>
                <StepContent>
                  <Stack spacing={1} component="form" onSubmit={changePassword}>
                    <TextField
                      type="text"
                      size="small"
                      label="Enter new password"
                      variant="outlined"
                      placeholder="Enter new password"
                      required
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <Button
                      disabled={
                        newPassword
                          ? newPassword.length > 5
                            ? false
                            : true
                          : true
                      }
                      variant="contained"
                      type="submit"
                      size="small"
                    >
                      Change password
                    </Button>
                  </Stack>
                </StepContent>
              </Step>
            </Stepper>
            <Typography color="secondary" align="center">
              {passChangeCon ? passChangeCon : null}
            </Typography>

            <Backdrop open={open}>
              <CircularProgress sx={{ color: "#115D56" }} />
            </Backdrop>
          </Paper>
        </Container>
      </div>{" "}
    </React.Fragment>
  );
}
