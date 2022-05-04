import React, {useState} from 'react'
import { Stack , Box } from '@mui/material'
import SidBar from '../components/SideBar/SideBar'
import MenuBar from '../components/MenuBar/MenuBar'

type props = {
    children: React.ReactNode
}

const Layout:React.FC<props> =  ({ children }) => {

    const [showSideBar, setShowSideBar] = useState<Boolean>(true)

    // const sideHide = {
    //     transition: "width 5.3s ease-in-out",
    //     width: "calc(100vw - 250px)"}
    // }

    return (
        <>
        <Stack direction="row" sx={{ width:"calc(100vw - 0px)" , height:"100vh", overflowY:"hidden"}}>
           <SidBar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
            <Box sx={showSideBar?{width: "calc(100vw - 250px)" , overflowY:"auto"}: {width: "calc(100vw - 60px)", overflowY:"auto", transition: "0"}}>
                <Box sx={{background:''}}>
                    <MenuBar title="dashboard" />
                </Box>
                {children}
            </Box>
         </Stack>
        </>
    )
}

export default Layout;
