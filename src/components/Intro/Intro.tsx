import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import LinkIcon from "./assets/link.svg";

const Intro = () => {
  const IntroContainer = {
    background:
      "linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%);",
    height: "150px",
    padding:"0 1rem",
    paddingTop:"4rem",
    color:"#fff",
    
  };
  const IntroLink = {
    cursor: "pointer",
    textDecoration: "underline",
    display:"flex",
    justifyContent:"center",
    alignItems:"flex-start",
    // height:0,
    padding:0,
    "& img":{
        width:"20px"
    },
    "& p":{
        padding:0,
        margin:0,
    }
  }

  return (
    <Stack sx={IntroContainer} direction="row" justifyContent="space-between" alignItems="flex-start">
      <Typography sx={{ fontSize:"1.8rem" }} variant="h5">Welcome Mario</Typography>
      <Box sx={IntroLink}>
          <p>app.vetrinalive.it/fenoh-store</p>
        <img src={LinkIcon} alt="link icon" />
      </Box>
    </Stack>
  );
};

export default Intro;
