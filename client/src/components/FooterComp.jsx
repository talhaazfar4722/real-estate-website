import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function FooterComp() {
  return (
    <div className='bg-banner-bg bg-cover bg-cen'>
      
    <div className=' text-white bg-black opacity-70'>
       <div className='sm:flex justify-between items-center p-5 sm:p-10 md:p-20 text-center'>
       
        <div className='leading-7 '>
           <h1 className='text-lg font-semibold'>Company</h1>
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Properties</li>
            <li>Contact</li>
           </ul>
        </div>
        <div className='leading-7 pt-8 sm:pt-0'>
          <h1 className='text-lg font-semibold'>Contact</h1>
          <ul>
          <li>primetechlogix@gmail.com</li>
          <li>+923024387800</li>
          <div className='pt-2 flex text-2xl gap-5 justify-center'>
            <FaInstagram/>
            <FaFacebook/>
            <FaGithub/>
            <FaWhatsapp/>
          </div>
          </ul>
        </div>
     
        <div className='leading-7 pt-8 sm:pt-0'>
          <h1 className='text-lg font-semibold'>Address</h1>
          <ul>
            <li>225 Rewaz Garden</li>
            <li>Lahore, Punjab</li>
            <li>Pakistan</li>
          </ul>
        </div>
       
       </div>
       <hr />
       <div className='p-3 flex text-center items-center justify-center'>
        <p className='text-lg'>@</p>
        <p>{new Date().getFullYear()} Talha Azfar / Prime Techlogix / All Rights Reserved</p>
       </div>
    </div>
    </div>
  )
}
