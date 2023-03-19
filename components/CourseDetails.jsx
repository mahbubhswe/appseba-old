import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function CourseDetails() {
  return (
    <Box>
      <Typography variant="bold" component="h3">
        Course Requerment
      </Typography>
      <Typography>Basic HTML, CSS and JavaScript</Typography>
      <Typography variant="bold" component="h3">
        What We Learn
      </Typography>
      <Typography>
        Front-ent+Back-end(Node JS, Express JS, React JS, Next JS, Mongodb, API,
        Prisma ORM, Authentication and more)
      </Typography>

      <Typography variant="bold" component="h3">
        Course Speciality
      </Typography>
      <Typography>Faster development with very easiest way</Typography>
      <Typography variant="bold" component="h3">
        Course Duration
      </Typography>
      <Typography>4 Month</Typography>
      <Typography variant="bold" component="h3">
        Weekly Class
      </Typography>
      <Typography>3 Days</Typography>
      <Typography variant="bold" component="h3">
        Course Outcome
      </Typography>
      <Typography>Complete with real life project</Typography>
      <Typography variant="bold" component="h3">
        Course Fee
      </Typography>
      <Typography>
        Only 6000 tk(At the time of registration 4000 tk and after 2 month 2000
        tk)
      </Typography>
      <Typography variant="bold" component="h3">
        Any Question?
      </Typography>
      <Link href="https://wa.me/01623218618">WhatsApp</Link>
    </Box>
  );
}
