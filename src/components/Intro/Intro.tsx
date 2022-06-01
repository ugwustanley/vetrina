import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import LinkIcon from "./assets/link.svg";

const Intro:React.FC = () => {
  const introContainer = {
    maxWidth: "1200px",
    background:
      "linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%);",
      padding:"0 1.5rem"
  }
  const Intro = {
    height: "150px",
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
        width:"22px",
        marginTop:".1rem",
        marginLeft:".5rem",
    },
    "& p":{
        padding:0,
        margin:0,
    }
  }

  return (
    <Box sx={introContainer}>
    <Stack sx={Intro} direction="row" justifyContent="space-between" alignItems="flex-start">
      <Typography sx={{ fontSize:"1.8rem" }} variant="h5">Welcome Mario</Typography>
      <Box sx={IntroLink}>
          <p>app.vetrinalive.it/fenoh-store</p>
        <img src={LinkIcon} alt="link icon" />
      </Box>
    </Stack>
    </Box>
  );
};

export default Intro;
