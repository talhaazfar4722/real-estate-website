import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashAccount from '../components/DashAccount';
import CreateListing from '../components/CreateListing';
import UserListings from '../components/UserListings';




export default function DashBoard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
    <div className='md:w-56'>
      {/* Sidebar */}
      <DashSidebar />
    </div>
   {/* account... */}
   {tab === 'account' && <DashAccount />}
   {/* create-listing... */}
   {tab === 'create-listing' && <CreateListing />}
   {/* user Listings... */}
   {tab === 'all-listing' && <UserListings />}

  </div>
  )
}
