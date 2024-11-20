import React, { useState } from 'react';

import { HiChevronRight, HiHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='hidden lg:inline'>
      <div className='bg-white flex  px-20 p-2 items-center text-sm'>
        <Link to='/'>  <h1 className='flex gap-2 font-bold text-xl items-center'><HiHome className='text-2xl' />Prime Estate</h1></Link>
        <div className='flex'>
          <h1 onClick={toggleNavbar} className='cursor-pointer ml-20 mr-10 uppercase flex items-center '>Buy <HiChevronRight /></h1>
          {isExpanded && (
            <div className='flex uppercase items-center '>
              <a href="#sell" >Home</a>
              <div className='vertical-line'></div>
              <a href="#rent" >Plot</a>
              <div className='vertical-line'></div>
              <a href="#contact" >Commercial</a>
              <div className='vertical-line'></div>
            </div>
          )}
        </div>

        <h1 className=''>RENT</h1>
        <div className='vertical-line'></div>
        <h1>AGENTS</h1>
        <div className='vertical-line'></div>
        <h1>NEW PROJECTS</h1>

      </div>

    </div>
  );
};

export default Navbar2;


