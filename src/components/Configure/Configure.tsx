import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { CaretDown ,ArrowRight } from "phosphor-react";
import ConfigureIcon from "./assets/tool.svg";

const Configure: React.FC = () => {
  const ConfigureContainer = {
    boxShadow:
      " 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06);",
    borderRadius: "10px",
    padding: "1rem",
    // width:"100%",
    // width: "280px",
    minHeight: "250px",
    background:"#fff",
    position:"relative",
  };
  const ConfigureTitle = {
    display: "flex",
    alignItems: "center",
    height:"fit-content",
    "& h5":{
        margin:0,
        marginLeft:".4rem",
        fontSize:"1.2rem",
        fontWeight:"normal",
    },
  };

  const ConfigureLink = {
    cursor: "pointer",
    color:"#21B8F9",
    textDecoration: "underline",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    // height:0,
    padding:0,
    position:"absolute",
    bottom:"20px",
    "& p":{
        padding:0,
        margin:0,
        fontSize:".9rem",
        marginRight:".7rem",
    }
  }

  const ConfigureValue = {
    marginTop:"1rem",
    color:"#FFA26B;",
    "& p":{
        padding:0,
        margin:0,
        fontSize:".9rem",
        marginRight:".7rem",
    },
    "& h2":{
        padding:0,
        margin:0,
        fontSize:"2.5rem",
        fontWeight:"normal",
        marginRight:".7rem",
    }

  }

  return (
    <Box sx={ConfigureContainer}>
      <Stack justifyContent="space-between" direction="row">
        <Box sx={ConfigureTitle}>
          <img src={ConfigureIcon} alt="orders icon" /> <h5>Configure your Shop</h5>
        </Box>

        {/* <Box sx={ConfigureDate}>
          <p>This Month</p> <CaretDown size={16} color="#666666" />
        </Box> */}
      </Stack>

      <Box  sx={ConfigureValue}>
            <h2>45%</h2>
            <p>completed</p>
      </Box>
       
       <p>Complete all the steps to have a complete shop to best present to your customers.</p>
     

      <Box sx={ConfigureLink}>
        <p>Complete the setup! </p>
        <ArrowRight size={17} color="#21B8F9" weight="bold" />
      </Box>
    </Box>
  );
};

export default Configure;
