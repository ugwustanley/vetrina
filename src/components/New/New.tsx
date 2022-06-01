import React from 'react'
import {Box} from '@mui/material'
import NewIcon from './assets/new.svg'

type props  = {
    items: number
}
const NewContainer = {
    display:"flex",
    alignItems:"center",
    "& img":{
      marginRight:".5rem"
    },
    "& sup":{
        background:"red",
        color:"#fff",
        padding:".07rem .4rem",
        borderRadius: "50%",
        marginLeft:"-.3rem"
    }
}
const New: React.FC<props> = ({items}) => {


  return (
    <Box sx={NewContainer}>
        <img src={NewIcon} alt="new items icon" />
        <p>What's New <sup>{items}</sup></p>
    </Box>
  )
}

export default New