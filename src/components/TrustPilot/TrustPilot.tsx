import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { CaretDown, ArrowRight } from "phosphor-react";
import TrustPilotIcon from "../../assets/extension.svg";
import StarImage from "./assets/star.svg";

const TrustPilot: React.FC = () => {
  const TrustPilotContainer = {
    boxShadow:
      " 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06);",
    borderRadius: "10px",
    padding: "1rem",
    minHeight: "200px",
    background: "#000032",
    marginBottom: "4rem",
    position: "relative",
    color: "#fff",
  };
  const TrustPilotTitle = {
    display: "flex",
    alignItems: "center",
    height: "fit-content",
    "& h5": {
      margin: 0,
      marginLeft: ".4rem",
      fontSize: "1.1rem",
      fontWeight: "normal",
    },
  };

  const TrustPilotLink = {
    cursor: "pointer",
    color: " #00C48C",
    textDecoration: "underline",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    position: "absolute",
    bottom: "20px",
    "& p": {
      padding: 0,
      margin: 0,
      fontSize: ".9rem",
      marginRight: ".7rem",
    },
  };

  
  const TrustPilotContent = {
    fontSize: "1rem",
    fontWeight:"normal",
    lineHeight: "1.5rem",
    marginTop: "1.7rem",
    "& span": {
      color: "#00C48C",
    },
    "& b": {
        color: "#fff",
        fontFamily: 'Noto Sans HK',
        fontWeight:"bold",
      },
  };

  return (
    <Box sx={TrustPilotContainer}>
      <Stack justifyContent="space-between" direction="row">
        <Box sx={TrustPilotTitle}>
          <img src={StarImage} alt="orders icon" /> <h5>TrustPilot</h5>
        </Box>
      </Stack>

      <Typography sx={TrustPilotContent} paragraph>
        Show us your love by leaving a <span>positive</span> review on trust
        pilot and receive the extension of <b>50 additional products</b>
      </Typography>

      <Box sx={TrustPilotLink}>
        <p>Write a review on TrustPilot</p>
        <ArrowRight size={17} color="#00C48C" weight="bold" />
      </Box>
    </Box>
  );
};

export default TrustPilot;
