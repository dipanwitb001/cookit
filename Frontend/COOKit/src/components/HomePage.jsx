import React from 'react';
import bg from '../images/bg_home.png';

const HomePage = () => {
  return (
    <div className="bg-red-900 w-full min-h-screen pt-16">
     <div className='flex flex-row justify-between items-center'>

      <div className='flex w-3/4 h-auto p-10 relative'>
          <img src={bg} alt="sf" className='w-3/4 h-auto transform translate-x-20 translate-y-10 ' />
      </div>
      
      <div className='flex flex-col space-y-10 p-5'>
          <p className='text-yellow-300 italic text-2xl'>Every recipe tells a story, blending flavors, memories, and the joy of cooking into something unforgettable</p>
          <button className='bg-yellow-400 text-white hover:bg-yellow-100 border-solid border-3 border-neutral-300 rounded-lg hover:scale-125 hover:ease-in duration-300 w-40 h-12 hover:text-red-900 '>Explore</button>
      </div>
     </div>


    </div>
  )
}

export default HomePage
