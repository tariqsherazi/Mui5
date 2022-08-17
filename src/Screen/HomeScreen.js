import { Box, Grid } from '@mui/material'
import React from 'react'
import Header from '../Components/Header'
import LeftSidebar from '../Components/LeftSidebar'
// import Navbar from '../Components/Navbar'
import Product from '../Components/Product'
import RightSideBar from '../Components/RightSideBar'

const HomeScreen = () => {
    return (
        <Box className=''>
            <Header/>
            
            <Grid container gap={2} sx={{mt:2}}>
                <Grid item xs={12} sm={2}  >
                    <LeftSidebar />
                </Grid>
                <Grid item sm={7.2}>
                     <Product/>
                </Grid>
                <Grid item xs={12} sm={2.6}>
                    <RightSideBar />
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomeScreen