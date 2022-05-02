import React from 'react'
import { ReactComponent as Logo}  from "../../assets/logo.svg";
import { ReactComponent as Menu} from '../../assets/menu.svg';
import {Stack , SvgIcon , Box } from '@mui/material'

type props ={
    showSideBar: Boolean,
    setShowSideBar:  React.Dispatch<React.SetStateAction<Boolean>>
}
const SideBarToggle: React.FC<props> = ({showSideBar , setShowSideBar }) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{
        padding: '1rem 1.1rem',
        height:"20px",
    }}>
     {showSideBar &&  <Logo />}

       <Box  sx={{
           cursor:"pointer",
           marginTop:".2rem"
       }} onClick={() => setShowSideBar(!showSideBar)}>
          <Menu />
       </Box>

    </Stack>
  )
}

export default SideBarToggle