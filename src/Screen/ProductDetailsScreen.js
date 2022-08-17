import { Box, Grid } from '@mui/material'
import React from 'react'
import { Latest } from '../Assests/Test'
import Header from '../Components/Header'
import LeftSidebar from '../Components/LeftSidebar'
// import Navbar from '../Components/Navbar'
import Product from '../Components/Product'
import RightSideBar from '../Components/RightSideBar'
import SingleProduct from '../Components/SingleProduct'

const ProductDetailsScreen = () => {
    return (
        <Box className=''>
            <Header src="/Assests/log3.png" />
            <Grid container gap={2} >
                <Grid item xs={12} sm={2}  >
                    <LeftSidebar />
                </Grid>
                <Grid item sm={7.2} xs={12}>
                     <SingleProduct/>
                </Grid>
                <Grid item xs={12} sm={2.6}>
                    <RightSideBar />
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProductDetailsScreen