import React, {useState} from 'react'
import {Box , Typography} from '@mui/material'
import {CaretDown , CaretUp} from 'phosphor-react'

//components
import SideBarItem from '../SideBarItem/SideBarItem'
import SideBarItemOrder from '../SideBarItemOrder/SideBarItemOrder'
import SideBarToggle from '../SideBarToggle/SideBarToggle'

//icons 
import Home from '../../assets/home-2.svg'

//mock data source
import categories from '../../mock/categories'
import sideBarItems from '../../mock/SideBarItems'

type props = {
    showSideBar: Boolean,
    setShowSideBar:  React.Dispatch<React.SetStateAction<Boolean>>
}

const NavContainer = {
  position: 'relative',
  borderRight: "2px solid gray",
  width: '250px',
  height: '100vh',
  transition: "width .3s ease-in-out",
  color: "#103B66",
  overflow: "hidden",
}

const Nav = {
    position: 'relative',
    height: 'auto',
    transition: "width .1s ease-in-out",
    color: "#103B66",

}

const NavContainerClose = {
  ...NavContainer,
  width:"60px",
}

const subNavItems = [
  {
    title: "Dashboard",
    path: "#",

  },
  {
    title: "Dashboard",
    path: "#",
    
  }
]



const SideBar:React.FC<props> = ({showSideBar , setShowSideBar}) => {

  return (
    <Box sx={showSideBar ? NavContainer: NavContainerClose}>
    <Box
      sx={Nav}
    >
      
        <SideBarToggle showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <SideBarItem active={true} name="Dashboard" subNavItems={subNavItems} icon={Home} link="#"  showSideBar={showSideBar}  />
        <SideBarItem name="H" icon={Home} link="#"  showSideBar={showSideBar}  />
        <SideBarItemOrder name="Orders" icon={Home} link="#"  showSideBar={showSideBar}  />

        
        {
          sideBarItems.map((item, index) => (
               item?.children ?
               ( <SideBarItem name={item.title} icon={item.icon} link="#"   showSideBar={showSideBar}  />)
               :
               ( <SideBarItem name={item.title} icon={item.icon} link="#" subNavItems={[...item?.children]}  showSideBar={showSideBar}  />)
          ))
        }
        

    </Box>
    </Box>
  )
}

export default SideBar