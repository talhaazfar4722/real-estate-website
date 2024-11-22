import React from 'react'
import { FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa'
import { HiHome } from 'react-icons/hi'
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function BrowseProperties() {
  return (
    <div className=''>
      <div className='p-2'>
        <h1 className='text-2xl font-semibold'>Browse Properties</h1>
      </div>
{/* 3 divs for homes commercial and plots */}
<div className='main lg:flex justify-between '>

    <div className='border-2 flex flex-col border-yellow-500 rounded-lg'> {/* Added flex-col to stack items vertically */}
        <div className='flex items-center gap-2 p-2'> {/* Wrap the icon and Homes heading in a separate div */}
            <HiHome className='text-2xl' />  
            <h1 className='text-xl font-semibold'>Homes</h1> {/* Added margin-left for spacing */}
        </div>

         {/* swiper */}
        <div >
      <Swiper
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      className='h-[160px] w-96'
    >
      <SwiperSlide>
       <div className=' items-center w-full h-full pt-5 '>
        <div className='flex justify-around items-center '>
            <div className='border-2 rounded-md border-black p-2'>5 marla</div>
            <div className='border-2 rounded-md border-black p-2'>10 marla</div>
            <div className='border-2 rounded-md border-black p-2'>3 marla</div>
        </div>
        <div className='flex justify-around items-center pt-5'>
            <div className='border-2 rounded-md border-black p-2'>5 marla</div>
            <div className='border-2 rounded-md border-black p-2'>10 marla</div>
            <div className='border-2 rounded-md border-black p-2'>3 marla</div>
        </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' items-center w-full h-full pt-5 '>
        <div className='flex justify-around items-center '>
            <div className='border-2 rounded-md border-black p-2'>5 marla</div>
            <div className='border-2 rounded-md border-black p-2'>10 marla</div>
            <div className='border-2 rounded-md border-black p-2'>3 marla</div>
        </div>
        <div className='flex justify-around items-center pt-5'>
            <div className='border-2 rounded-md border-black p-2'>5 marla</div>
            <div className='border-2 rounded-md border-black p-2'>10 marla</div>
            <div className='border-2 rounded-md border-black p-2'>3 marla</div>
        </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' items-center w-full h-full pt-5 '>
        <div className='flex justify-around items-center '>
            <div className='border-2 rounded-md border-black p-2'>5 marla</div>
            <div className='border-2 rounded-md border-black p-2'>10 marla</div>
            <div className='border-2 rounded-md border-black p-2'>3 marla</div>
        </div>
       </div>
      </SwiperSlide>
    </Swiper>
        </div>
    </div>

    {/* slide-2 */}
    <div className='border-2 flex flex-col border-yellow-500 rounded-lg'>
        <div className='flex items-center gap-2 p-2'> 
            <FaMapMarkerAlt className='text-2xl' />  
            <h1 className='text-xl font-semibold'>Plots</h1> 
        </div>

         {/* swiper */}
        <div>
      <Swiper
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      className='h-[160px] w-96'
    >
      <SwiperSlide>
       <div className=' items-center w-full h-full pt-5 '>
        <div className='flex justify-center lg:gap-12 items-center '>
            <div className='border-2 rounded-md border-black p-2'>5 marla</div>
            <div className='border-2 rounded-md border-black p-2'>10 marla</div>
            <div className='border-2 rounded-md border-black p-2'>3 marla</div>
        </div>
        <div className='flex justify-center lg:gap-12 items-center pt-5'>
            <div className='border-2 rounded-md border-black p-2'>5 marla</div>
            <div className='border-2 rounded-md border-black p-2'>10 marla</div>
            <div className='border-2 rounded-md border-black p-2'>3 marla</div>
        </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='items-center w-full h-full pt-5 '>
        <div className='flex justify-around items-center '>
            <div className='border-2 rounded-md border-black p-2'>5 marla</div>
            <div className='border-2 rounded-md border-black p-2'>10 marla</div>
            <div className='border-2 rounded-md border-black p-2'>3 marla</div>
        </div>
        <div className='flex justify-around items-center pt-5'>
            <div className='border-2 rounded-md border-black p-2'>5 marla</div>
            <div className='border-2 rounded-md border-black p-2'>10 marla</div>
            <div className='border-2 rounded-md border-black p-2'>3 marla</div>
        </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='items-center w-full h-full pt-5 '>
        <div className='flex justify-around items-center '>
            <div className='border-2 rounded-md border-black p-2'>5 marla</div>
            <div className='border-2 rounded-md border-black p-2'>10 marla</div>
            <div className='border-2 rounded-md border-black p-2'>3 marla</div>
        </div>
       </div>
      </SwiperSlide>
    </Swiper>
        </div>
    </div>

    {/* slide 3 */}
    <div className='border-2 flex flex-col border-yellow-500 rounded-lg'> 
        <div className='flex items-center gap-2 p-2'>
            <FaShoppingCart className='text-2xl' />  
            <h1 className='text-xl font-semibold'>Commercial</h1>
        </div>

         {/* swiper */}
        <div>
      <Swiper
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      className='h-[160px] w-96'
    >
      <SwiperSlide>
       <div className=' items-center w-full h-full pt-5 '>
        <div className='flex justify-center lg:gap-12 items-center '>
            <div className='border-2 rounded-md border-black p-2'>5 marla</div>
            <div className='border-2 rounded-md border-black p-2'>10 marla</div>
            <div className='border-2 rounded-md border-black p-2'>3 marla</div>
        </div>
        <div className='flex justify-center lg:gap-12 items-center pt-5'>
            <div className='border-2 rounded-md border-black p-2'>5 marla</div>
            <div className='border-2 rounded-md border-black p-2'>10 marla</div>
            <div className='border-2 rounded-md border-black p-2'>3 marla</div>
        </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' items-center w-full h-full pt-5 '>
        <div className='flex justify-around items-center '>
            <div className='border-2 rounded-md border-black p-2'>5 marla</div>
            <div className='border-2 rounded-md border-black p-2'>10 marla</div>
            <div className='border-2 rounded-md border-black p-2'>3 marla</div>
        </div>
        <div className='flex justify-around items-center pt-5'>
            <div className='border-2 rounded-md border-black p-2'>5 marla</div>
            <div className='border-2 rounded-md border-black p-2'>10 marla</div>
            <div className='border-2 rounded-md border-black p-2'>3 marla</div>
        </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' items-center w-full h-full pt-5 '>
        <div className='flex justify-around items-center '>
            <div className='border-2 rounded-md border-black p-2'>5 marla</div>
            <div className='border-2 rounded-md border-black p-2'>10 marla</div>
            <div className='border-2 rounded-md border-black p-2'>3 marla</div>
        </div>
       </div>
      </SwiperSlide>
    </Swiper>
        </div>
    </div>
  





</div>

    </div>
  )
}
