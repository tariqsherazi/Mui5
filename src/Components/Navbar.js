import styled from '@emotion/styled'
import { AppBar, Box, Drawer, InputBase, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import { Facebook, Instagram, Menu as MenuIcon, Twitter} from '@mui/icons-material'
import React, { useState } from 'react'

const Navbar = () => {
  const [open,setOpen]=useState(false);
    const Tolbars=styled(Toolbar)({
     display:'flex',
     justifyContent:'space-between',
     alignItems:'center',
     gap:5
    })
    const listItem=[
      {list:'Home',link:'/' },
      {list:'Latest Mobiles',link:'/about' },
      {list:'Review',link:'/product' },
      {list:'News',link:'/conatct' },
    ]
    const social={
      display:'flex',
      gap:1,
      justifyContent:'center',
      alignItems:'center',
      cursor:'pointer'
    }
  return (
    <Box>
        <AppBar position='fixed' sx={{color:'white',m:0}} className='bg-slate-400'>
       <Tolbars> 
        <Box className='w-[16.5%] bg-white'>
        <Box className='h-[8rem] flex justify-center  border-red-800'>
        <img className='h-full rounded-md' src='../Assests/log4.png'/>
         </Box>
        </Box>
        <Box sx={{display:{xs:'none',sm:'none',md:'flex'}}}>
          <Stack direction={'row'} spacing={15}>

          {listItem.map((item)=>(
            <Typography variant="body1" className='font-serif py-1 px-3 rounded-md bg-slate-500' sx={{cursor:'pointer',fontSize:20}}> {item.list} </Typography>
          ))}
          </Stack>

        </Box>
        <Box>
          <Stack direction={'row'}  spacing={1} >
            <InputBase sx={{color:'white',borderBlockColor:'white',border:1,borderRadius:7,pl:1}} placeholder='Search'/>
          <MenuIcon sx={{display:{xs:'block',sm:'block',md:'none'}}} onClick={()=>setOpen(!open)} />
          </Stack>
          </Box>
         </Tolbars>
        </AppBar>
   
   
        <Drawer
        color='primary'
      anchor='right'
      open={open}
      onClose={()=>setOpen(!open)}
    >
<Box sx={{width:160,height:'100vh',color:'black', backgroundColor:'dark', display:'flex', flexDirection:'column', justifyContent:'centers',alignItems:'center' }}>
          {listItem.map((item)=>(

        <MenuItem align='center' onClick={()=>setOpen(!open)}>
        {item.list}
        </MenuItem>
          ))}
        </Box>
    </Drawer>
    </Box>
  )
}

export default Navbar