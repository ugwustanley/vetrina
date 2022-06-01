import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { CaretDown ,ArrowRight } from "phosphor-react";
import ViewIcon from "../../assets/view.svg";

const Visitors: React.FC = () => {
  const VisitorsContainer = {
    boxShadow:
      " 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06);",
    borderRadius: "10px",
    padding: "1rem",
    // width:"100%",
    // maxWidth: "320px",
    // display:"grid",
    // justifySelf:"center",
     //margin:"auto",
    height: "200px",
    background:"#fff",
    position:"relative",
  };
  const VisitorsDate = {
    display: "flex",
    alignItems: "center",
    height:"fit-content",
    "& p":{
        margin:0,
        color: "#666666",
        marginRight:".4rem",
        fontSize:".9rem",
    },
  };

  const VisitorsTitle = {
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

  const VisitorsLink = {
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
        marginTop:"-.05rem",
    }
  }

  const VisitorsValue = {
    fontSize:"3rem",
    marginTop:"2rem",
  }

  return (
    <Box sx={VisitorsContainer}>
      <Stack justifyContent="space-between" direction="row">
        <Box sx={VisitorsTitle}>
          <img src={ViewIcon} alt="orders icon" /> <h5>Visitors</h5>
        </Box>

        <Box sx={VisitorsDate}>
          <p>This Month</p> <CaretDown size={16} color="#666666" />
        </Box>
      </Stack>

      <Typography sx={VisitorsValue} variant="h4">1824</Typography>

      <Box sx={VisitorsLink}>
        <p>Do you want more visits? Contact us!</p>
        <ArrowRight size={17} color="#21B8F9" weight="bold" />
      </Box>
    </Box>
  );
};

export default Visitors;
