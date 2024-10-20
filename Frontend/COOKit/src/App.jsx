import React from 'react';
import Navbar from './components/Navbar.jsx';
import HomePage from './components/HomePage.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <h1 className='text-orange-500 bg-slate-500'>COOKit</h1> */}
      <HomePage />
    </div>
  )
}

export default App
