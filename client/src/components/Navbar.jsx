import React, { useEffect, useState } from 'react'
import {HiHome} from 'react-icons/hi'
import {Avatar, Button, Dropdown, TextInput} from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserFailure, deleteUserSuccess, signOutUserStart } from '../redux/user/userSlice'

export default function Navbar() {

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // signout
  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart())
      const res = await fetch('/api/auth/signout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(data.message));
    }
  }

  // searching functionality
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <div className='hidden lg:inline '>
    <div className='text-white bg-black p-1 border-2 border-red-600'>

    <div className='flex justify-between lg:justify-around items-center '>
      <div className='flex gap-2'>
       <div className='text-2xl'><HiHome/></div>
       <Link to='/'><div className='font-bold'><h1>Properties</h1></div></Link>
      </div>
      <div className=''>
        <ul className='flex uppercase gap-10 text-sm'>
        <Link to='/'><li>Home</li></Link>
          <li>About</li>
          <li>Blog</li>
          <li>Maps</li>
          <Dropdown
            inline
            label={
              <h1>TOOLS</h1>
            }
          >
            <Dropdown.Item>Home Loan Calculator</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Area Unit Converter</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Land Records</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Construction Cost Calculator</Dropdown.Item>
            <Dropdown.Divider />
            </Dropdown>
            <Dropdown
            inline
            label={
              <h1>MORE</h1>
            }
          >
            <Dropdown.Item>Forum</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Index</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Trends</Dropdown.Item>
            <Dropdown.Divider />
            </Dropdown>

            <form onSubmit={handleSubmit} className='flex border items-center'>
          <input
           type="text"
           className='bg-transparent w-20 h-5 border-none focus:outline-none'
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}  />
         <button>
          <FaSearch size={15} />
          </button>
        </form>

        </ul>
      </div>
       {/* if user exist it shows pic while if it doesnt exist it shows sign in button */}
       {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.avatar} rounded/>
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
            </Dropdown.Header>
           
            <Link to='/profile?tab=account'>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignOut} >logout</Dropdown.Item>
            <Dropdown.Divider />
            
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <button type='button' className='border-2 p-1 px-2 rounded-lg hover:text-black hover:bg-white '  >
              Sign In
            </button>
          </Link>
        )}

    </div>

    </div>
    </div>
  )
}
