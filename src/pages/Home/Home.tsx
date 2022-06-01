import React from "react";
import { Box } from "@mui/material";

import Intro from "../../components/Intro/Intro";
import Visitors from "../../components/Visitors/Visitors";
import Order from "../../components/Order/Order";
import Configure from "../../components/Configure/Configure";
import SellProduct from "../../components/SellProduct/SellProduct";
import Extensions from "../../components/Extensions/Extensions";
import TrustPilot from "../../components/TrustPilot/TrustPilot";
import NewsContainer from "../../components/NewsContainer/NewsContainer";
import Invite from "../../components/Invite/Invite";
import Support from "../../components/Support/Support";

const Home: React.FC = () => {
  const HomeContainer = {
    minHeight: "calc(100vh - 80px)",
   
    overflowY: "auto",
    background: "#E5E5E5",
    // width: "inherit",
  };
  const HomeBody = {
    maxWidth:"1200px",
    margin:"0 auto",
    marginTop: "-6rem",
    padding: "1.5rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    // gridAutoColumns: "minmax(100px, auto)",
    gridGap: "1rem",
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "1fr 1fr",
    },
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    }
  };
  const HomeInvite = {
     gridColumn: "3/4",
     marginTop:"-4rem",
     "@media (max-width: 1024px)": {
      gridColumn: "1/3",
    },
    "@media (max-width: 768px)": {
      gridColumn: "1/2",
    }
  }

  const HomeNewsContainer = {
    gridColumn: "1/3",
    "@media (max-width: 768px)": {
      gridColumn: "1/2",
    }
  }

  return (
    <Box sx={HomeContainer}>
      <Intro />
      <Box sx={HomeBody}>
        <Visitors />
        <Order />
        <Configure />
        <SellProduct />
        <Extensions />
        <TrustPilot />
        <Box sx={HomeNewsContainer}>
          <NewsContainer />
        </Box>
        <Box sx={HomeInvite}>
          <Invite />
          <Support />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
