import { Menu } from '@mui/icons-material'
import { Box, Button, Drawer, InputBase, ListItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom';
const Header = ({src}) => {
    const navigate=useNavigate();
    console.log(src)
    const [open,setOpen]=useState(false)
    const [hover,setHover]=useState(false);
  return (
    <>
    <Box className='h-[10rem]  sticky w-full flex gap-2 p-3'>
        <Box className='w-3/12 h-full'>
            <img className='h-full' src={src?src: '/Assests/log3.png'}/>
        </Box>
        <Box className='flex flex-col h-full w-full bg-slate-400 rounded-xl'>
       <Box className=' h-[40%]' sx={{display:{xs:'none',sm:'none',md:'block'}}}>
        <ul className='flex justify-around items-center gap-4 h-full text-white font-serif text-lg'>
            <li
            className='hover:bg-black p-2 rounded-md cursor-pointer'><Link to='/'>Home</Link> </li>
            <li className='hover:bg-black p-2 rounded-md cursor-pointer'>Phone  Details </li>
            <Box>
                {!hover &&

            <li onMouseOver={()=>{setHover(true)}} className='hover:bg-black p-2 rounded-md cursor-pointer'>Mobiles List</li>
        }
           
            {hover &&
            <div onMouseOut={()=>setHover(false)} className='flex flex-col  mb-2 h-[5rem]  bg-slate-500  gap-1 items-center mt-10 z-1   '>
            <h1  className='hover:bg-black p-1  text-sm rounded-md cursor-pointer'>New Mobiles </h1>
            <h1 className='hover:bg-black p-1  text-sm rounded-md cursor-pointer'>Used Mobiles </h1>
</div>
            }
            </Box>
            
            <li className='hover:bg-black p-2 rounded-md cursor-pointer'>Gadget </li>
            <li className='hover:bg-black p-2 rounded-md cursor-pointer'>Others </li>
            <li className='hover:bg-black p-2 rounded-md cursor-pointer'>Contact Us </li>
        </ul>
       </Box>
       <Box className=' md:h-[60%] w-full h-full  rounded-lg flex items-center px-5  justify-center'>
        <input placeholder='Search'  className='w-full bg-white border-2 p-2 rounded-xl border-blue-300 outline-none'/>
        <Button onClick={()=>setOpen(!open)} sx={{display:{md:'none'}}} className='text-white  p-3'><Menu className='text-3xl' /> </Button>
       
       </Box>

        </Box>

    </Box>
    <Drawer open={open} anchor='right' className=' '>
        <Box className='' gap='2' sx={{width:150,background:'', height:'100%'}}>
            <ListItem sx={{cursor:'pointer'}}  onClick={()=>setOpen(!open)} divider>Home</ListItem>
            <ListItem divider>Phone Details </ListItem>
            <ListItem divider sx={{}}>Mobile List</ListItem>
            <ListItem divider>Gadget</ListItem>
            <ListItem divider>Others</ListItem>
            <ListItem divider>Contact Us</ListItem>
        </Box>

    </Drawer>
</>
  )
}

export default Header