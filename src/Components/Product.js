import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import  { datas } from '../Assests/Test'
import {useNavigate} from 'react-router-dom';
const Product = () => {
const naviagte=useNavigate()
    return (
        <>
        <Grid container gap={2} justifyContent={'center'}  alignItems={'center'}   className='bg-[#D2DCE7] p-2  rounded-xl  md:p-4 mt-5  ' >
            {datas.map((item)=>(

            <Grid
            onClick={()=>naviagte('/product/details/123')}
             item boxShadow={2}  className='bg-white rounded-md cursor-pointer' xs={5.5} md={3.7}  sx={{ display: "flex", flexDirection: 'column', }}>
            <Box className='w-full h-[13rem] flex justify-center'>
             <img className='h-full rounded-md' src={item.img}/>
            </Box>
            <Box className='flex flex-col justify-center items-center p-2 '>
             <h1 className='font-bold text-yellow-700 text-md'>{item.brandName} </h1>
             <p className='font-bold sm:text-md text-sm truncate overflow-hidden'>Price  <span>(PKR) {item.pricePkr} </span></p>
             <p className='font-bold'>USD <span> ${item.priceDollar} </span></p>
             <p className='text-sm'>{item.ram}GB/<span>{item.rom}GB</span></p>
             <p className='text-yellow-600'>Not Rated Yed</p>
             </Box>
            </Grid >
            )) }



        </Grid>
        </>

    )
}

export default Product