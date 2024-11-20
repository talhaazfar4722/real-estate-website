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

function App() {


  return (
    <div >
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
        <Route element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
      <FooterComp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
