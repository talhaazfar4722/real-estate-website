import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import FooterComp from './components/FooterComp';
import PrivateRoute from './components/PrivateRoute';
import Navbar2 from './components/Navbar2';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';



function App() {


  return (
    <div className=' lg:px-8'>
       <BrowserRouter>
      <div>
        <Navbar />
        <Navbar2/>
      </div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/listing/:listingId' element={<Listing />} />
        <Route element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
        <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
      <FooterComp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
