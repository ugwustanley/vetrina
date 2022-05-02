import React, {useState} from 'react'
import { Stack } from '@mui/material'
import SidBar from '../components/SideBar/SideBar'
import MenuBar from '../components/MenuBar/MenuBar'

type props = {
    children: React.ReactNode
}

const Layout:React.FC<props> =  ({ children }) => {

    const [showSideBar, setShowSideBar] = useState<Boolean>(true)

    return (
        <>
        <Stack direction="row">
           <SidBar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
            <div className="">
                <div>
                    <MenuBar title="dashboard" />
                </div>
                {children}
            </div>
         </Stack>
        </>
    )
}

export default Layout;
