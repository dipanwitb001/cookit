import React from 'react';
import search from '../images/search.png';

const SearchPage = () => {
  return (
    <div className='bg-amber-600 w-full min-h-screen pt-32 bg-gradient-to-t from-gray-700 to-transparent'>
      <h1 className='flex justify-center items-center p-4 text-4xl  italic text-white'>Search Your Favourite Recipe</h1>

      {/* <div className='w-3/5 h-2/5 '> */}
      <div className='bg-slate-800 border border-slate-400 rounded-md p-10 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-4/6 h-auto mx-auto mt-12 transform -translate-y-10'>
          <div className='flex flex-col items-center justify-between'>
            <input type="text" placeholder='search your recipe' className='w-4/6 border-4 border-solid rounded-lg mb-4 ' />
            <img className='flex items-center w-4/6 h-5/6'src={search} alt="" />
          </div>
      </div>
    </div>
  )
}

export default SearchPage
