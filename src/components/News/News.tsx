import React from "react";
import { Box, Stack, Button} from "@mui/material";
import { CaretDown, ArrowRight } from "phosphor-react";
import Image from './assets/image.svg'



const News: React.FC = () => {
  const News = {
    minHeight: "100px",
    background: "#fff",
    marginBottom: "6rem",
    position: "relative",
    display:"grid",
    gridTemplateColumns: "1fr 1fr",
    backgroundColor:"red",
  };
  const NewsTitle = {
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
  const NewsContent = {
    fontSize: "1rem",
    fontWeight: "normal",
    lineHeight: "1.5rem",
    marginTop: "1.7rem",
    display:"flex",
    alignItems:"center",
    "& p": {
      marginLeft:"1rem",
    },
  };

  const NewsButton = {
      marginTop:"1rem",
      padding:"2rem",
  }

  const NewsLink = {
    cursor: "pointer",
    color: "#21B8F9",
    textDecoration: "underline",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    "& p": {
      padding: 0,
      margin: 0,
      fontSize: ".9rem",
      marginRight: ".7rem",
    },
  };

  const NewsImage = {
      backgroundImage:`url(${Image})`,
      backgroundSize:"cover",
    //   backgroundColor:"red",
      width:"100%",
      height:"100%",
  }

  return (
    <Box sx={News}>
      
        <Box sx={NewsImage}>
            image
        </Box>
        <Box>COntent</Box>
    </Box>
  );
};

export default News;
