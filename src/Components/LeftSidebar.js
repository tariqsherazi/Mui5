import { Box, List, ListItem } from '@mui/material'
// import { Box } from '@mui/system'
import React from 'react'
import { Latest } from '../Assests/Test'

const LeftSidebar = () => {
  return (
    <>
    <div className='w-full   bg-slate-300 mt-5 rounded-md  p-2  '>
      <h1 className='text-xl  text-center mb-2 p-2 bg-black text-white'>  Filter By  Company </h1>
    <ul className='flex  flex-wrap justify-center items-center  w-full  gap-1'>
      <li className='text-white w-[4.3rem]  text-center cursor-pointer font-serif text-md py-1 px-1 rounded-md bg-slate-400'>Samsong</li>
      <li className='text-white w-[4.3rem] text-center cursor-pointer font-serif text-md py-1 px-1 rounded-md bg-slate-400'>Iphone</li>
      <li className='text-white w-[4.3rem] text-center font-serif cursor-pointer text-md py-1 px-1 rounded-md bg-slate-400'>Oppo</li>
      <li className='text-white w-[4.3rem] text-center font-serif cursor-pointer text-md py-1 px-1 rounded-md bg-slate-400'>Vivo</li>
      <li className='text-white w-[4.3rem] text-center font-serif cursor-pointer text-md py-1 px-1 rounded-md bg-slate-400'>Infinix</li>
      <li className='text-white w-[4.3rem] text-center font-serif cursor-pointer text-md py-1 px-1 rounded-md bg-slate-400'>Lg</li>
      <li className='text-white w-[4.3rem] text-center font-serif cursor-pointer text-md py-1 px-1 rounded-md bg-slate-400'>Lenovo</li>
      <li className='text-white w-[4.3rem] text-center font-serif cursor-pointer text-md py-1 px-1 rounded-md bg-slate-400'>Nokia</li>
      <li className='text-white w-[4.3rem] text-center font-serif cursor-pointer text-md py-1 px-1 rounded-md bg-slate-400'>Techno</li>
      <li className='text-white w-[4.3rem] text-center font-serif cursor-pointer text-md py-1 px-1 rounded-md bg-slate-400'>RealMe</li>
    </ul>
    </div>
    <Box className='bg-slate-300 mt-5 w-full h-full p-2 space-y-2 rounded-md'>
      <h1 className='text-center bg-black text-white p-2 '>Top Three By Fans</h1>
        {Latest.map((item)=>(
          // console.log(p,'p')
          <Box className='bg-white w-full  flex flex-col justify-center items-center rounded-md shadow-md '>
            <Box className='h-[10rem] '>
              <img className='h-full' src={item.img}/>
            </Box>
            <Box className='flex flex-col justify-center items-center'>
              <h1 className=' text-yellow-800 font-bold text-md '> {item.brandName} </h1>
              <h1 className=' text-black font-bold text-sm '>Price (PKR) {item.pricePkr} </h1>
              <h1 className=' text-black font-bold text-sm '> USD ${item.priceDollar} </h1>
             <p className='text-sm'>{item.ram}GB/<span>{item.rom}GB</span></p>
             <p className='text-yellow-600 text-sm'>Not Rated Yed</p>

            </Box>
          </Box>
          
          ))}
        
      

    </Box>
    </>
  )
}

export default LeftSidebar