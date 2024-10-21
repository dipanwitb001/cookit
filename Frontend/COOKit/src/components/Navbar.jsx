import React from 'react';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import {NavLink , Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-slate-900 w-full fixed top-0 left-0'> 
      <div className='flex flex-row p-2 items-center justify-between'>

        <div className='flex p-2 items-center space-x-2 mt-2 '>
          <RestaurantIcon className='stroke-yellow-300 ' style={{ width: '72px', height: '80px', color: 'brown' }}/>
          <h1 className='text-3xl text-neutral-300'>COOK<span className='text-6xl text-yellow-300'>it</span></h1>
        </div>

        <div className='flex flex-row ml-8 space-x-10 p-4 justify-between'>
          <NavLink
          to='/home' 
          className='text-white hover:scale-125 hover:ease-in duration-300'>HOME</NavLink>
          <NavLink
          to='/about'
          className='text-white hover:scale-125 hover:ease-in duration-300'>ABOUT US</NavLink>
          <NavLink
          to='/menu'
          className='text-white hover:scale-125 hover:ease-in duration-300'>MENU</NavLink>
          <NavLink
          to='/category'
          className='text-white hover:scale-125 hover:ease-in duration-300'>CATEGORIES</NavLink>
          <NavLink
          to='/contact' 
          className='text-white hover:scale-125 hover:ease-in duration-300'>CONTACT US</NavLink>
        </div>

        <div className='flex'>
          <Link to='/search'>
          <button className='border-solid border-2 text-white p-4 text-2xl mr-5 rounded-lg hover:scale-105 hover:ease-in duration-300 hover:bg-slate-300 hover:text-slate-950'>Search Recipes</button>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
