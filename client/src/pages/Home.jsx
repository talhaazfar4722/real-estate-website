import React from 'react'
import {useTypewriter, cursor} from 'react-simple-typewriter'

export default function Home() {

  const [text] = useTypewriter({
    words: [
      "Wanna find your dream home!",
      
    ],
  

  });

  return (
    <div className='bg-banner-bg w-full h-[500px] bg-center bg-cover flex justify-center items-center'>
   <div className='text-white '>
        <p className='text-lg ' >{text}</p>
        <h1 className='text-3xl pt-1 font-bold'>Real Estate always with you</h1>
        <p className='md:w-3/3 pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='pt-4 mx-auto'>
         <button type='button' className='text-white border-2 border-white  focus:ring-4 focus:outline-none focus:ring-yellow-400 font-semibold text-sm p-2 text-center me-2 mb-2' >
          Read more
        </button>
        </div>
      </div>
    <div className='flex justify-between space-x-10 px-10 hidden md:inline '>
      
      <div className='text-white border p-2 bg-gray-800 opacity-80'>
      <p className='text-2xl '>Find your dream home</p>
       <form className='pt-4 px-4'>
        <input type="text" placeholder='Search...' className='w-full bg-transparent border p-1' />

        <div className="flex flex-col">
       <div className='pt-4 gap-2'>
      <select
        id="city"
        className="p-1 border bg-transparent text-white w-[115px]"
      >
        <option value="" className='bg-black' disabled>
          -- Select a city --
        </option>
        <option className='bg-black' value="city">City</option>
      </select>
      <select
        id="city"
        className="p-1 border bg-transparent text-white w-[115px] ml-4  "
      >
        <option value="" className='bg-black' disabled>
          -- Select area --
        </option>
        <option className='bg-black' value="area">Area</option>
      </select>
      </div>
      </div>

        <div className='flex gap-2 pt-4'>
        <input type="checkbox" className='size-4 mt-1' />
        <p className='text-lg'>Rent </p>
        <input type="checkbox" className='size-4 mt-1'/>
        <p className='text-lg'>Sale</p>
        <input type="checkbox" className='size-4 mt-1' />
        <p className='text-lg'>Rent & Sale</p>
        </div>

        <div className="flex flex-col">
       <div className='pt-4 gap-2'>
      <select
        id="city"
        className="p-1 border bg-transparent text-white w-[115px]"
      >
        <option value="" className='bg-black' disabled>
          -- Select number of bedrooms --
        </option>
        <option className='bg-black' value="new-york">No. of beds</option>
      </select>
      <select
        id="city"
        className="p-1 border bg-transparent text-white w-[115px] ml-4  "
      >
        <option value="" className='bg-black' disabled>
          -- Select number of bathrooms --
        </option>
        <option className='bg-black' value="new-york">No. of baths</option>
      </select>
      </div>
      </div>

      <div className='flex gap-2 pt-4'>
        <input type="checkbox" className='size-4 mt-1' />
        <p className='text-lg'>Parking </p>
        <input type="checkbox" className='size-4 mt-1 ml-12'/>
        <p className='text-lg'>Furnished</p>
        </div>

      <div className="flex flex-col">
       <div className='pt-4 gap-2'>
      <select
        id="city"
        className="p-1 border bg-transparent text-white w-full"
      >
        <option value="" className='bg-black' disabled>
          -- Sort --
        </option>
        <option className='bg-black' value="latest">Latest</option>
        <option className='bg-black' value="oldest">Oldest</option>
        <option className='bg-black' value="price highest to lowest">Price highest to lowest</option>
        <option className='bg-black' value="price lowest to highest">Price lowest to highest</option>
      </select>
      </div>
      </div>
        
        <div className='pt-4 text-center items-center justify-center mx-auto'>
         <button type='button' className='text-white border-2 border-white  focus:ring-4 focus:outline-none focus:ring-yellow-400 font-semibold text-sm p-2 text-center me-2 mb-2' >
          Apply filter
        </button>
        </div>
      
       </form>
      </div>
    </div>
  </div>
  )
}
