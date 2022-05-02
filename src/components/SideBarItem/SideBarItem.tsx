import React from 'react'
import {Box , Typography} from '@mui/material'
import {CaretDown , CaretUp} from 'phosphor-react'

type TSubNav = {
     name: string,
     link: string,
}

type props = {
  name: string,
  icon: any,
  link: string,
  subNavItems?: Array<TSubNav>,
  bg?: string,
  showSideBar: Boolean,
}

const NavItemBox = {
  borderLeft: "5px solid #21B8F9",
  height:"40px",
  
}

const NavItem = {
  display: "flex",
  justifyContent: "space-between",
  height:"inherit",
  padding: ".1rem 1rem",
  alignItems: "center",
  marginLeft: ".4rem",
  borderTopLeftRadius:"5px",
  borderBottomLeftRadius:"5px",
  background:"pink"
}

const NavInnerItem = {
   display: "flex",
   alignItems: "center",
}

const NavItemText = {
  fontSize: "1rem",
  marginLeft:".3rem"
}



const SideBarItem: React.FC<props> = ({name,icon, link, subNavItems, bg , showSideBar}) => {
  return (
    <Box sx={NavItemBox}>
    <Box sx={NavItem}>
        <Box sx={NavInnerItem}>
          <img
              src={ icon || ""}
              alt="home icon"
          />
         { showSideBar && 
                 <Typography sx={NavItemText} variant="h6">
                      {name || "Dashboard"}
                 </Typography>
          }
        </Box>

        {subNavItems && showSideBar ?
          <Box sx={{cursor:"pointer"}}>
             { true ? <CaretDown size={20}/> : <CaretUp size={20} /> }
          </Box>: null}


        {/* <CaretDown size={22} /> */}
    </Box>
</Box>
  )
}

export default SideBarItem