import { Button, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  const router = useRouter();
  return (
    <Container>
      <Stack direction="row" sx={{ py: "10px" }}>
        <Typography
          flexGrow={1}
          sx={{
            fontSize: "25px",
            fontFamily: "cursive",
            fontWeight: 900,
            color: "#FCC300",
          }}
        >
          AppSeba
        </Typography>
        <Button
          sx={{
            borderRadius: "50px",
            fontFamily: "cursive",
            backgroundColor: "#F42776",
          }}
          variant="contained"
          disableElevation
          size="small"
          onClick={() => router.push("https://web.facebook.com/appseba")}
        >
          Contact
        </Button>
      </Stack>
    </Container>
  );
}
