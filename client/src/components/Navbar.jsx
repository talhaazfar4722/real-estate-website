import React from 'react'
import { FaSearch } from 'react-icons/fa'
import {FiMenu} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {Avatar, Button, Dropdown, TextInput} from 'flowbite-react'

export default function Navbar() {

  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className='bg-banner-bg'>
    <div className='w-full h-[60px] border-b-[1px] border-gray-800 text-white bg-gray-800 opacity-80'>
      <div className='max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between'>
       <Link to='/'><h1 className='text-2xl uppercase font-extrabold'>Real Estate</h1></Link> 
       <form className='p-1 sm:border rounded-xl flex items-center'>
          <input type="text" placeholder='Search...' className='bg-transparent border-none text-white  focus:outline-none hidden sm:inline sm:w-56 md:w-96 px-2' />
          <FaSearch size={20} className='text-white'/>
        </form>
        <div>
        {/* <Link to='/profile'>
            {currentUser ? (
              <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link> */}


           {/* if user exist it shows pic while if it doesnt exist it shows sign in button */}
           {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.avatar} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
            </Dropdown.Header>
           
            <Link to='/profile'>
              <Dropdown.Item>My Account</Dropdown.Item>
            </Link>
            
            <Dropdown.Divider />
            <Link  to='/'>
              <Dropdown.Item>logout</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <button type='button' className='border-2 p-2 rounded-lg hover:text-black hover:bg-white ' >
              Sign In
            </button>
          </Link>
        )}


        </div>
        {/* <div className='inline-flex sm:hidden'>
            <FiMenu className='text-3xl'/>
        </div> */}
      </div>
    </div>
    </div>
  )
}
