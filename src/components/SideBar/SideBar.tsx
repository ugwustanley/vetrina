import React, {useState} from 'react'
import {Box , Typography , Divider} from '@mui/material'

//components
import SideBarItem from '../SideBarItem/SideBarItem'
import SideBarItemOrder from '../SideBarItemOrder/SideBarItemOrder'
import SideBarToggle from '../SideBarToggle/SideBarToggle'
import SelectShop from '../SelectShop/SelectShop'

//icons 
import Home from '../../assets/home-2.svg'
import Orders from '../../assets/orders.svg'
import Catalogue from '../../assets/catalogue.svg'

//mock data source
import categories from '../../mock/categories'
import sideBarItems from '../../mock/SideBarItems'
import sideBarItems2 from '../../mock/SideBarItems2'

type props = {
    showSideBar: Boolean,
    setShowSideBar:  React.Dispatch<React.SetStateAction<Boolean>>
}

const NavContainer = {
  position: 'relative',
  borderRight: "2px solid rgba(0, 0, 0, .2)",
  width: '250px',
  height: '100vh',
  transition: "width .3s ease-in-out",
  color: "#103B66",
  overflow: "hidden",
}

const Nav = {
    position: 'relative',
    height: '100vh',
    transition: "width .1s ease-in-out",
    color: "#103B66",
    overflowY:"auto",
    marginBottom: "5rem 0",
    
'&::-webkit-scrollbar-track' :{
  backgroundColor:'transparent',
}
,
'&::-webkit-scrollbar' : {
	width: '5px',
  height:'5px',
  backgroundColor:'transparent',
}
,
'::-webkit-scrollbar-thumb':
{
	backgroundColor: 'rgba(0, 0, 0, .2)',
}


}

const NavContainerClose = {
  ...NavContainer,
  width:"60px",
}

const NavDivider = {
  margin: "1.5rem 0"
}



const SideBar:React.FC<props> = ({showSideBar , setShowSideBar}) => {


  return (
    <Box sx={showSideBar ? NavContainer: NavContainerClose}>
    <Box
      sx={Nav}
    >
      
        <SideBarToggle showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <SideBarItem active={true} name="Dashboard" icon={Home} link="#"  showSideBar={showSideBar}  />
        <SideBarItem name="Catalogue" icon={Catalogue} subNavItems={categories}  link="#"  showSideBar={showSideBar}  />
        <SideBarItemOrder name="Orders" icon={Orders} link="#"  showSideBar={showSideBar}  />

        
        {
          sideBarItems.map((item: any, index: number) => (
                    
               item?.children ?
               ( <SideBarItem name={item.title} icon={item.icon} link="#" subNavItems={item?.children}  showSideBar={showSideBar}  />)
               :
               ( <SideBarItem name={item.title} icon={item.icon} link="#"   showSideBar={showSideBar}  />)
             
          ))
        }
        
        <Divider sx={NavDivider} />

         
        {
          sideBarItems2.map((item: any, index: number) => (
                    
               item?.children ?
               ( <SideBarItem name={item.title} icon={item.icon} link="#" subNavItems={item?.children}  showSideBar={showSideBar}  />)
               :
               ( <SideBarItem name={item.title} icon={item.icon} link="#"   showSideBar={showSideBar}  />)
             
          ))
        }

        <SelectShop />


    </Box>
    </Box>
  )
}

export default SideBar