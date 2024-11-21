import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

export default function UserListings() {

    const [showListingsError, setShowListingsError] = useState(false);
    const [userListings, setUserListings] = useState([]);
    const location = useLocation();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);

    // show listings
    useEffect(() => {
    const handleShowListings = async () => {
        try {
          setShowListingsError(false);
          const res = await fetch(`/api/user/listings/${currentUser._id}`);
          const data = await res.json();
          if (data.success === false) {
            setShowListingsError(true);
            return;
          }
          setUserListings(data);
        } catch (error) {
          setShowListingsError(true);
        }
      };
      if (currentUser) {
        handleShowListings();
      }
    }, [currentUser._id]);

// delete listing
    const handleListingDelete = async (listingId) => {
      try {
        const res = await fetch(`/api/listing/delete/${listingId}`, {
          method: 'DELETE',
        });
        const data = await res.json();
        if (data.success === false) {
          console.log(data.message);
          return;
        }
        setUserListings((prev) =>
          prev.filter((listing) => listing._id !== listingId)
        );
      } catch (error) {
        console.log(error.message);
      }
    };
     

  return (
    <div className='text-white lg:p-10 p-1 md:p-5 w-full'>
      <p className='text-red-700 '>
        {showListingsError ? 'Error showing listings' : ''}
      </p>
      {userListings &&
        userListings.length > 0 &&
        <div className="flex flex-col gap-4 bg-white p-1 sm:p-5 w-full">
          <h1 className='text-center text-2xl font-semibold text-black'>Your Listings</h1>
          {userListings.map((listing) => (
            <div
              key={listing._id}
              className='border-2 border-black rounded-lg p-3 flex items-center text-center '
            >
              <Link to={`/listing/${listing._id}`}>
                <img
                  src={listing.imageUrls[0]}
                  alt='listing cover'
                  className='h-16 w-16 hidden sm:inline items-center object-contain text-black'
                />
              </Link>
              <Link
                className='text-slate-700 font-semibold  hover:underline truncate flex-1'
                to={`/listing/${listing._id}`}
              >
                <p>{listing.name}</p>
              </Link>
  
              <div className='flex gap-5   '>
                <button className='text-red-700 uppercase'  onClick={() => handleListingDelete(listing._id)}>Delete</button>
                <button className='text-green-700 uppercase'>Edit</button>
              </div>
            </div>
          ))}
        </div>}
        <div>
            
        </div>
    </div>
  )
}
