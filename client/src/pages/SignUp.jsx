import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {

  // handle signup
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='min-h-screen'>
      <div className='bg-banner-bg bg-center bg-cover w-full h-screen  items-center justify-center flex'>

        <div className='text-center border p-10 bg-gray-800 opacity-80 '>
          <div>
          <h1 className='text-3xl text-white text-semibold'>Sign Up</h1>
          <form onSubmit={handleSubmit}  className='flex flex-col gap-5 text-center items-center justify-center pt-10 text-white '>
            <input type="text" placeholder='username' className='border p-1 bg-transparent w-56 sm:w-96' id='username' required onChange={handleChange}/>
            <input type="email" placeholder='email' className='border p-1 bg-transparent w-56 sm:w-96' id='email' required onChange={handleChange}/>
            <input type="password" placeholder='password' className='border p-1 bg-transparent w-56 sm:w-96' id='password' required onChange={handleChange}/>
            <button  disabled={loading}  className='border-2 p-2  hover:bg-white hover:text-black disabled:opacity-50'>  
              {loading ? 'Loading...' : 'Sign Up'}
            </button>
            <OAuth/>
          </form>
          <div className='p-4'>
            <p className='text-white'>Have an account?</p>
           <Link to='/sign-in'><p className='text-blue-600 hover:underline'>Sign in</p></Link>
          </div>
          
          <div className=''>
          {error && <p className='text-red-500 mt-5'>{error}</p>}
          </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}
