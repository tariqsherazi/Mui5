import { Box } from '@mui/material'
import React from 'react'
import { Latest } from '../Assests/Test'
const RightSideBar = () => {
  return (
    <Box className='bg-slate-300 mt-5 w-full h-full p-2 space-y-2 rounded-md'>
      <h1 className='text-center bg-black text-white p-2 '>Latest Mobiles</h1>

        {Latest.map((item)=>(
          // console.log(p,'p')
          <Box className='bg-white w-full  flex flex-col justify-center items-center rounded-md shadow-md '>
            <Box className='h-[10rem] '>
              <img className='h-full' src={item.img}/>
            </Box>
            <Box className='flex flex-col justify-center items-center'>
              <h1 className=' text-yellow-800 font-bold text-md '> {item.brandName} </h1>
              <h1 className=' text-black font-bold md:text-sm text-xs  '>Price (PKR) {item.pricePkr} </h1>
              <h1 className=' text-black font-bold text-sm '> USD ${item.priceDollar} </h1>
             <p className='text-sm'>{item.ram}GB/<span>{item.rom}GB</span></p>
             <p className='text-yellow-600 text-sm'>Not Rated Yed</p>

            </Box>
          </Box>
          
          ))}
        
      

    </Box>
  )
}

export default RightSideBar