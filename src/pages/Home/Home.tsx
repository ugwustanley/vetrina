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
    marginTop: "-6rem",
    padding: "1.5rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridAutoColumns: "minmax(100px, auto)",
    gridGap: "1rem",
  };
  const HomeInvite = {
     gridColumn: "3/4",
     marginTop:"-4rem",
  }

  const HomeNewsContainer = {
    gridColumn: "1/3",
  }

  return (
    <Box sx={HomeContainer}>
      <Intro />
      <Box sx={HomeBody}>
        <Visitors />
        <Order />
        {/* <Box sx={{background:"red", width:"200px", height:"20rem"}}></Box>
            <Visitors /> */}
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

       
        {/* <Configure /> */}
      </Box>
    </Box>
  );
};

export default Home;
