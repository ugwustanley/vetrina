import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { CaretDown, ArrowRight } from "phosphor-react";
import ExtensionsIcon from "../../assets/extension.svg";
import GlobeImage from "./assets/globe.svg";

const Extensions: React.FC = () => {
  const ExtensionsContainer = {
    boxShadow:
      " 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06);",
    borderRadius: "10px",
    padding: "1rem",
    paddingRight: 0,
    minHeight: "280px",
    background: "#fff",
    position: "relative",
    "@media (min-width:1024px)":{
      marginTop:"-3rem"
  }
  };
  const ExtensionsTitle = {
    display: "flex",
    alignItems: "center",
    height: "fit-content",
    "& h5": {
      margin: 0,
      marginLeft: ".4rem",
      fontSize: "1.2rem",
      fontWeight: "normal",
    },
  };

  const ExtensionsLink = {
    cursor: "pointer",
    color: "#21B8F9",
    textDecoration: "underline",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height:0,
    padding: 0,
    position: "absolute",
    bottom: "20px",
    "& p": {
      padding: 0,
      margin: 0,
      fontSize: ".9rem",
      marginRight: ".7rem",
      marginTop:"-.1rem",
    },
  };

  const ExtensionsGlobe = {
    
    background: "#FFA26B",
    width:"150px",
    height: "150px",
    display:"grid",
    placeContent: "center",
    borderRadius: "10px",

  };
  const ExtensionsIncrease = {
    background: "#00C48C",
    width:"120px",
    height: "150px",
    textAlign:"right",
    color:"#fff",
    borderRadius: "10px",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginLeft:"auto",
    overflow:"hidden",
    boxSizing:"border-box",
    paddingTop:"2rem",
    
    "& h1": {
      lineHeight: "0",
      fontSize:"1.5rem",
      fontWeight:"normal",
      marginRight:"1rem",
    },
    "& h2": {
      lineHeight: "0.9",
      fontSize:"1.5rem",
      fontWeight:"lighter",
    }

  };

  const ExtensionsContent = {
    marginTop: "1.5rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    "& h6": {
      fontSize:"1.1rem",
      lineHeight:"1.3rem",
      marginTop:".7rem",
    }
  };

  const ExtensionsContentContainer = {
    width: "150px",

  }

  return (
    <Box sx={ExtensionsContainer}>
      <Stack justifyContent="space-between" direction="row">
        <Box sx={ExtensionsTitle}>
          <img src={ExtensionsIcon} alt="orders icon" />{" "}
          <h5>Extensions Marketplace</h5>
        </Box>
      </Stack>

      <Box sx={ExtensionsContent}>
        <Box sx={ExtensionsContentContainer}>
          <Box sx={ExtensionsGlobe}>
              <img src={GlobeImage} alt="globe" />
          </Box>
          <Typography variant="h6">Connect your own domain </Typography>
        </Box>

        <Box sx={{...ExtensionsContentContainer, marginLeft:"auto", width:"120px"}}>
            <Box sx={ExtensionsIncrease}>
                <h1>+50%</h1>
                <h2>Prodotti</h2>
            </Box>
            <Typography variant="h6">50 Additional Products</Typography>
        </Box>

      </Box>

      <Box sx={ExtensionsLink}>
        <p>Discover all extensions </p>
        <ArrowRight size={17} color="#21B8F9" weight="bold" />
      </Box>
    </Box>
  );
};

export default Extensions;
