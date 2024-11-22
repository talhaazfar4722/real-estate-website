import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ListingItem from '../components/ListingItem';
import { MdArrowRightAlt } from 'react-icons/md';

export default function RentPlaces() {

  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
      } catch (error) {
        console.log(error);
      }
    };

   
    fetchOfferListings();
  }, []);
  return (
    <div className=''>
      <div className='w-full mx-auto flex flex-col gap-8 p-2 '>
     
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className='sm:flex justify-between items-center'>
              <h2 className='text-2xl font-semibold '>Recent places for rent</h2>
              <Link className='text-lg font-semibold text-blue-800 hover:underline flex items-center' to={'/search?type=rent'}>View All<MdArrowRightAlt /></Link>
            </div>
            <div className='flex justify-between flex-wrap gap-4 pt-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}