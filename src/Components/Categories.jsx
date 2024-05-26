import React from 'react'

export default function Categories() {
  return (
    
    <div className=' absolute z-10  gradient w-full  pl-4 pr-4 mt-2 flex items-center justify-between rounded-full py-[0.1rem] '>
        <ul className='flex items-center py-1.5 text-white text-[14px] gap-10'>
          <li className='cursor-not-allowed'>
            <p>Explore</p>
          </li>
          <li className='cursor-not-allowed'>
            <p>Trending</p>
          </li>
          <li className='cursor-not-allowed'>
            <p>Action</p>
          </li>
          <li className='cursor-not-allowed'>
            <p>WorldCup</p>
          </li>
          <li className='cursor-not-allowed'>
            <p>Classics</p>
          </li>
          <li className='cursor-not-allowed'>
            <p>More</p>
          </li>
        </ul>
        <input type='search' placeholder="Search" className='pl-4  rounded-full  placeholder:text-black' />

    </div>
  )
}
