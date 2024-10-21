import React from 'react';
import Navbar from './components/Navbar.jsx';
import HomePage from './components/HomePage.jsx';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      {/* <h1 className='text-orange-500 bg-slate-500'>COOKit</h1> */}
      <Outlet />
    </div>
  )
}

export default App
