import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import FooterComp from './components/FooterComp';

function App() {


  return (
    <div className='lg:px-8'>
       <BrowserRouter>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <FooterComp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
