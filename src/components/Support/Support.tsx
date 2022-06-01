import React from "react";
import { Box, Stack, Button} from "@mui/material";
import { CaretDown, ArrowRight } from "phosphor-react";
import SupportIcon from "./assets/headphones.svg";
import Person from './assets/person.png';

const Support: React.FC = () => {
  const SupportContainer = {
    boxShadow:
      " 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06);",
    borderRadius: "10px",
    padding: "1rem",
    minHeight: "150px",
    background: "#fff",
    marginBottom: "4rem",
    marginTop:"-3rem",
    position: "relative",
  };
  const SupportTitle = {
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

  const SupportContent = {
    fontSize: "1rem",
    fontWeight: "normal",
    lineHeight: "1.5rem",
    marginTop: ".7rem",
    display:"flex",
    alignItems:"center",
    "& p": {
      marginLeft:"1rem",
    },
  };

  const SupportButton = {
      marginTop:"1rem",
      marginBottom:".5rem",
      padding:".6rem 1rem",
      textTransform:"none",
  }

  return (
    <Box sx={SupportContainer}>
      <Stack justifyContent="space-between" direction="row">
        <Box sx={SupportTitle}>
          <img src={SupportIcon} alt="orders icon" /> <h5>Customer Support</h5>
        </Box>
      </Stack>

      <Box sx={SupportContent}>
         <img src={Person} />
         <p>Simone is here to help you.</p>
      </Box>

      <Button sx={SupportButton} variant="contained">Contact Us</Button>


     
    </Box>
  );
};

export default Support;
