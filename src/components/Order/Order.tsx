import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { CaretDown ,ArrowRight } from "phosphor-react";
import ViewIcon from "../../assets/view.svg";
import OrdersIcon from '../../assets/orders.svg'

const Order: React.FC = () => {
  const OrderContainer = {
    boxShadow:
      " 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06);",
    borderRadius: "10px",
    padding: "1rem",
    // width: "100%",
    // 280px
    height: "200px",
    background:"#fff",
    position:"relative",
    fontFamily: 'Noto Sans HK',
  };
  const OrderDate = {
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

  const OrderTitle = {
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

  const OrderLink = {
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

  const OrderValue = {
    fontSize:".95rem",
    margin:0,
    marginTop:"1rem",
    fontWeight:"normal",
    fontFamily: 'Noto Sans HK',
    
  }

  const OrderName = {
    fontSize:"1rem",
    margin:0,
    marginTop:"1rem",
    color:"#666666",
  }

  return (
    <Box sx={OrderContainer}>
      <Stack justifyContent="space-between" direction="row">
        <Box sx={OrderTitle}>
          <img src={OrdersIcon} alt="orders icon" /> <h5>Orders</h5>
        </Box>

        <Box sx={OrderDate}>
          <p>This Month</p> <CaretDown size={16} color="#666666" />
        </Box>
      </Stack>

      <Stack justifyContent="space-between" alignItems="center" direction="row">
               <Typography sx={OrderName} variant="h4">Orders Received:</Typography>
               <Typography sx={OrderValue} variant="h6">156</Typography>
      </Stack>

      <Stack justifyContent="space-between" direction="row">
               <Typography sx={OrderName} variant="h4">Earnings:</Typography>
               <Typography sx={OrderValue} variant="h6">€ 1893,24</Typography>
             
      </Stack>

     

      <Box sx={OrderLink}>
        <p>10 free tips to increase your sales</p>
      </Box>
    </Box>
  );
};

export default Order;
