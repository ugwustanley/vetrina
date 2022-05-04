import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { CaretDown ,ArrowRight } from "phosphor-react";
import Phone from "./assets/phone.svg";
import Appstore from "./assets/appstore.svg";
import Playstore from "./assets/playstore.svg";
import SellProductsIcon from '../../assets/orders.svg'

const SellProduct: React.FC = () => {
  const SellProductContainer = {
    boxShadow:
      " 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06);",
    borderRadius: "10px",
    padding: "1rem",
    paddingLeft:"1.2rem",
    // width: "100%",
    // 280px
    minHeight: "280px",
    background:"#F3A35C",
    position:"relative",
    fontFamily: 'Noto Sans HK',
    color:"#fff",
    marginTop:"-3rem",
    "& @media (min-width:768px)":{
        marginTop:"-4rem"
    }
  };


  const SellProductTitle = {
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

  const SellProductLink = {
    cursor: "pointer",
    textDecoration: "underline",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    // height:0,
    marginRight:"auto",
    width:"fit-content",
    padding:0,
    "& p":{
        padding:0,
        margin:0,
        fontSize:".9rem",
        marginRight:".3rem",
    }
  }

  const SellProductValue = {
    fontSize:".95rem",
    margin:0,
    marginTop:"1rem",
    fontWeight:"normal",
    fontFamily: 'Noto Sans HK',
    
  }

  const SellProductName = {
    fontSize:"1rem",
    margin:0,
    marginTop:"1rem",
    color:"#666666",
  }
  const SellProductMain = {
      display:"grid",
      gridTemplateColumns:"1fr 140px",
      marginTop:"1rem",
  }

  return (
    <Box sx={SellProductContainer}>
      <Box sx={SellProductMain}>
         
        <Box> 
            <Typography variant="h6" sx={{fontSize:"1.4rem"}}>Sell your products on your exclusive APP published on the stores </Typography>
            <Box sx={SellProductLink}>
                <p>Shore More!</p>
                <ArrowRight size={17} color="#fff" weight="bold" />
            </Box>
        </Box>

        <Box>
          <img src={Phone} alt="iphone" />
        </Box>
      </Box>

      <Stack justifyContent="space-between" alignItems="center" direction="row" sx={{marginTop:"1.3rem"}}>
               <img src={Appstore} />
               <img  src={Playstore}/>
      </Stack>
 
    </Box>
  );
};

export default SellProduct;
