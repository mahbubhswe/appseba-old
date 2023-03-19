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
  Divider,
  InputAdornment,
  IconButton,
  Autocomplete,
} from "@mui/material";
import axios from "axios";
import MuiPhoneNumber from "material-ui-phone-number";
import React, { useState } from "react";
import Swal from "sweetalert2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
export default function Index() {
  const [phone, setPhone] = useState(0);
  const [code] = useState(Math.floor(100000 + Math.random() * 900000));
  const [inputCode, setInputCode] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [newPassword, setNewPassword] = useState();
  const [showHidePassword, setShowHidePassword] = React.useState(false);
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [nameInputError, setNameInputError] = useState();
  const [apiRes, setApiRes] = useState();
  const [passwordInputError, setPasswordInputError] = useState();
  //send code
  const sendVerificationCode = async (e) => {
    e.preventDefault();
    setOpen(true);
    const { data } = await axios.post(
      `/api/course/sendotp?email=${email}&textWithCode=Please, use this ${code} verification code to complete your registration process.`
    );
    setApiRes(data);
    setOpen(false);
    setActiveStep(1);
  };

  //verify code
  const verifyCode = (e) => {
    e.preventDefault();
    if (code == inputCode) {
      setActiveStep(2);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Sorry, you have inputed an invalid code.",
      });
    }
  };

  function handleOnChange(value) {
    setPhone(value);
  }
  //Complate Registration
  const complateRegistration = async (e) => {
    e.preventDefault();
    setOpen(true);
    setActiveStep(3);

    const { data } = await axios.post(`/api/course/registration`, {
      name,
      phone,
      email,
      address,
      newPassword,
    });
    setOpen(false);
    if (data == "Registration has been completed successfully!") {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: data,
      });
    } else if (data == "You have already registered.") {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: data,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data,
      });
    }
  };

  const districtList = [
    "Sherpur – শেরপুর",
    "Chittagong-চট্টগ্রাম",
    "Dhaka – ঢাকা",
    "Rajshahi – রাজশাহী",
    "Sylhet – সিলেট",
    "Jessore – যশোর",
    "Dinajpur - দিনাজপুর",
    "Mymensingh - ময়মনসিংহ",
    "Comilla – কুমিল্লা",
    "Barisal – বরিশাল",
    "Faridpur – ফরিদপুর",
    "Bogra – বগুড়া",
    "Pabna – পাবনা",
    "Rangamati - রাঙ্গামাটি",
    "Kushtia – কুষ্টিয়া",
    "Rangpur – রংপুর",
    "Noakhali - নোয়াখালী",
    "Khulna – খুলনা",
    "Tangail – টাঙ্গাইল",
    "Panchagarh - পঞ্চগড়",
    "Bhola - ভোলা",
    "Bandarban - বান্দরবান",
    "Chandpur – চাঁদপুর",
    "Habiganj – হবিগঞ্জ",
    "Lakshmipur - লক্ষীপুর",
    "Barguna – বরগুনা",
    "Jhalokati – ঝালকাঠি",
    "Pirojpur - পিরোজপুর",
    "Patuakhali - পটুয়াখালী",
    "Jhenaidah - ঝিনাইদহ",
    "Narail – নড়াইল",
    "Magura – মাগুরা",
    "Lalmonirhat - লালমনিরহাট",
    "Kurigram - কুড়িগ্রাম",
    "Nilphamari - নীলফামারী",
    "Gaibandha – গাইবান্ধা",
    "Thakurgaon - ঠাকুরগাঁ",
    "Satkhira – সাতক্ষিরা",
    "Bagerhat - বাগেরহাট",
    "Chuadanga - চুয়াডাঙ্গা",
    "Meherpur - মেহেরপুর",
    "Sirajganj - সিরাজগঞ্জ",
    "Joypurhat - জয়পুরহাট",
    "Natore – নাটোর",
    "Naogaon – নওগাঁ",
    "Nawabganj - নওয়াবগঞ্জ",
    "Khagrachhari - খাগড়াছড়ি",
    "Feni – ফেনী",
    "Brahmanbaria - ব্রাহ্মণবাড়ীয়া",
    "Sunamganj - সুনামগঞ্জ",
    "Cox Bazar - কক্সবাজার",
    "Moulvibazar -মৌলভীবাজার",
    "Gopalganj - গোপালগঞ্জ",
    "Shariatpur - শরীয়তপুর",
    "Madaripur - মাদারীপুর",
    "Rajbari – রাজবাড়ী",
    "Gazipur – গাজীপুর",
    "Kishoreganj - কিশোরগঞ্জ",
    "Jamalpur - জামালপুর",
    "Netrakona - নেত্রকোনা",
    "Munshiganj - মুন্সীগঞ্জ",
    "Narsingdi – নরসিংদী",
    "Narayanganj -নারায়ণগঞ্জ",
    "Manikganj - মানিকগঞ্জ",
  ];
  return (
    <React.Fragment>
      <Typography align="center" variant="bold" component="h1">
        Course Registration
      </Typography>
      <Divider sx={{ my: "5px" }}></Divider>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Enter email address</StepLabel>
          <StepContent>
            <Stack spacing={1} component="form" onSubmit={sendVerificationCode}>
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
                color="secondary"
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
          <StepLabel>Verify email</StepLabel>
          <StepContent>
            <Stack spacing={1} component="form" onSubmit={verifyCode}>
              <Typography align="center" sx={{ color: "green" }}>
                {apiRes ? apiRes : null}
              </Typography>
              <TextField
                type="text"
                size="small"
                color="secondary"
                variant="outlined"
                placeholder="Enter verification code"
                required
                onChange={(e) => setInputCode(e.target.value)}
              />
              <Button
                disabled={inputCode ? false : true}
                color="secondary"
                variant="contained"
                type="submit"
                size="small"
              >
                Verify email
              </Button>
            </Stack>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>Complete registration</StepLabel>
          <StepContent>
            <Stack spacing={1} component="form" onSubmit={complateRegistration}>
              <TextField
                type="text"
                size="small"
                color="secondary"
                variant="outlined"
                fullWidth
                placeholder="Enter full name"
                required
                error={nameInputError && nameInputError}
                helperText={nameInputError && nameInputError}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (newValue.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
                    setNameInputError();
                    setName(e.target.value);
                  } else {
                    setName();
                    setNameInputError("Please enter your full name");
                  }
                }}
              />
              <Autocomplete
                options={districtList}
                onInputChange={(event, newInputValue) => {
                  setAddress(newInputValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    required
                    color="secondary"
                    placeholder="Select your home district"
                  />
                )}
              />

              <MuiPhoneNumber
                variant="outlined"
                size="small"
                countryCodeEditable={false}
                defaultCountry={"bd"}
                onChange={handleOnChange}
              />
              <TextField
                type={showHidePassword ? "text" : "password"}
                size="small"
                color="secondary"
                variant="outlined"
                fullWidth
                placeholder="Choice a new passcode"
                required
                error={passwordInputError && passwordInputError}
                helperText={passwordInputError && passwordInputError}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (newValue.length > 6) {
                    setPasswordInputError();
                    setNewPassword(e.target.value);
                  } else {
                    setNewPassword();
                    setPasswordInputError(
                      "Password should be 6 characters long"
                    );
                  }
                }}
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
              />
              <Button
                disabled={nameInputError || passwordInputError}
                color="secondary"
                variant="contained"
                type="submit"
                size="small"
                fullWidth
              >
                Registration
              </Button>
            </Stack>
          </StepContent>
        </Step>
      </Stepper>
      <Backdrop open={open}>
        <CircularProgress sx={{ color: "#115D56" }} />
      </Backdrop>
    </React.Fragment>
  );
}
