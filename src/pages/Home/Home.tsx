import React from 'react'
import {Box} from "@mui/material"


import Intro from '../../components/Intro/Intro'
import Visitors from '../../components/Visitors/Visitors'
import Order from '../../components/Order/Order'
import Configure from '../../components/Configure/Configure'
import SellProduct from '../../components/SellProduct/SellProduct'

const Home: React.FC = () => {
  const HomeContainer = {
    // background: "linear-gradient(to bottom, #fdfbfb 0%, #ebedee 100%)",
    //background: "linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 250px ,  #fff 132.05%);",
    minHeight: "calc(100vh - 80px)",
    overflowY:"auto",
    background:"#E5E5E5",
    // width: "inherit",
  }
  const HomeBody = {
    marginTop:"-6rem",
    padding:"1.5rem",
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr",
    gridAutoColumns: "minmax(100px, auto)",
    gridGap:"1rem",
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
            {/* <Configure /> */}
       </Box>
    </Box>
  )
}

export default Home