import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen'>
      <div className='bg-banner-bg bg-center bg-cover w-full h-screen  items-center justify-center flex'>

        <div className='text-center border p-10 bg-gray-800 opacity-80 '>
          <div>
          <h1 className='text-3xl text-white text-semibold'>Sign Up</h1>
          <form className='flex flex-col gap-5 text-center items-center justify-center pt-10 text-white '>
            <input type="text" placeholder='username' className='border p-1 bg-transparent ' id='username' />
            <input type="email" placeholder='email' className='border p-1 bg-transparent ' id='email' />
            <input type="password" placeholder='password' className='border p-1 bg-transparent ' id='password' />
            <button  className='border-2 p-2 hover:text-white hover:bg-white hover:text-black disabled:opacity-50'>Sign up</button>
          </form>
          <div className='p-4'>
            <p className='text-white'>Have an account?</p>
           <Link to='/sign-in'><p className='text-blue-600 hover:underline'>Sign in</p></Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
