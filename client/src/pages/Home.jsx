import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import img_1 from '../assets/img_1.jpg'
import img_2 from '../assets/img_2.jpeg'
import img_3 from '../assets/img_3.jpeg'
import BrowseProperties from '../components/BrowseProperties';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Home() {
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
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);


  return (

    <div>

      {/* swiper */}
      <Swiper
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      // style={{ height: '300px' }}
      className='h-[510px]'
    >
      <SwiperSlide>
        <img 
            src={img_1}
            alt="Image 1" 
            className='w-full h-full'  
            style={{ 
            objectFit: 'cover', 
            objectPosition: 'center' 
          }}   />
      </SwiperSlide>
      <SwiperSlide>
        <img 
            src={img_2}
            alt="Image 2" 
            className='w-full h-full' 
            style={{ 
            objectFit: 'cover', 
            objectPosition: 'center' 
          }}  />
      </SwiperSlide>
      <SwiperSlide>
        <img
            src={img_3}
            alt="Image 3"
            className='w-full h-full'
            style={{ 
            objectFit: 'cover', 
            objectPosition: 'center' 
          }}   />
      </SwiperSlide>
    </Swiper>

    {/* Browse Properties */}
    <div>
      <BrowseProperties/>
    </div>


      
    </div>
  );
}