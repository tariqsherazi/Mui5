import { Box } from '@mui/material'
import React from 'react'

import Slider from "react-slick";
import { datas, Latest } from '../Assests/Test';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import "~slick-carousel/slick/slick.css";
const SingleProduct = () => {
    var settingss = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        swipeToSlide: true,
        autoPlay: true,
        autoplaySpeed: 1000
    }
    var settings = {
        // dots: true,
        infinite: true,
        arrows: false,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        // autoPlay: true,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 2000,
        // fade: true
      };

  return (
    <Box className='w-full h-full bg-slate-300  mt-5 p-2 gap-2'>

      <Box className='w-full flex justify-center items-center '>
      <Box className='w-[90%] h-full'>
       <Slider {...settings}>
       {datas.map((item)=>(
       <Box className='w-full h-full  flex justify-center items-center'>
       <Box className=' w-full flex items-center justify-center h-[15rem]'>
        <img className='h-full' src={item.img}/>
       </Box>

      </Box>
      ))
      
    }
      {/* <div> */}
        {/* <h3>2</h3> */}
      {/* </div> */}
    </Slider>
    </Box>
    </Box>
    {/* <Box className='bg-white'>2</Box> */}
    {/* <Box className='bg-black'>3</Box> */}
    {/* <Box className='bg-white'>4</Box> */}
    {/* <Box className='bg-black'>5</Box> */}

</Box>
  )
}

export default SingleProduct