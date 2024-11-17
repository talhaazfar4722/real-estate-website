import React from 'react'
import { FaSearch } from 'react-icons/fa'
import {FiMenu} from 'react-icons/fi'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='bg-banner-bg'>
    <div className='w-full h-[60px] border-b-[1px] border-gray-800 text-white bg-gray-800 opacity-80'>
      <div className='max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between'>
       <Link to='/'><h1 className='text-2xl uppercase font-extrabold'>Real Estate</h1></Link> 
       <form className='p-1 sm:border sm:border-white rounded-xl flex items-center'>
          <input type="text" placeholder='Search...' className='bg-transparent text-white  focus:outline-none w-0 sm:w-56 md:w-96 px-2' />
          <FaSearch size={20} className='text-white'/>
        </form>
        <div>
          <Link to='sign-in'>
        <button type='button' className='text-white border-2 border-white  focus:ring-4 focus:outline-none focus:ring-yellow-400 font-semibold text-sm p-2 text-center me-2 mb-2' >
          Sign In
        </button>
        </Link>
        </div>
        {/* <div className='inline-flex sm:hidden'>
            <FiMenu className='text-3xl'/>
        </div> */}
      </div>
    </div>
    </div>
  )
}
