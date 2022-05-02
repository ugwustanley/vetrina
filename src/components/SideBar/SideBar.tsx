import React, {useState} from 'react'
import {Box , Typography} from '@mui/material'
import {CaretDown , CaretUp} from 'phosphor-react'

//components
import SideBarItem from '../SideBarItem/SideBarItem'
import SideBarToggle from '../SideBarToggle/SideBarToggle'

//icons 
import Home from '../../assets/home.svg'

type props = {
    showSideBar: Boolean,
    setShowSideBar:  React.Dispatch<React.SetStateAction<Boolean>>
}

const Nav = {
    position: 'relative',
    background:"red",
    width: '250px',
    height: '100vh',
    transition: "width .3s ease-in-out",

}

const NavClose = {
  width:"60px",
  position: 'relative',
  background:"red",
  transition: "width .3s ease-in-out",
  height: '100vh',
}

const subNavItems = [
  {
    name: "Dashboard",
    link: "/dashboard",

  },
  {
    name: "Dashboard",
    link: "/dashboard",
    
  }
]



const SideBar:React.FC<props> = ({showSideBar , setShowSideBar}) => {

  return (
    <Box
      sx={showSideBar ? Nav : NavClose}
    >
      
        <SideBarToggle showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <SideBarItem name="Dashboard" subNavItems={subNavItems} icon={Home} link="#"  showSideBar={showSideBar}  />

    </Box>
  )
}

export default SideBar