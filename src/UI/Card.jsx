import React from 'react'

function Card({wallpaper,  title}) {
  return (
    <div className=''>
      <img src={wallpaper} alt="" />
      <div className="bg-blue-800 h-[8rem]" >
        <p className='text-[20px] text-white pl-4 pt-2'>  Special Deal </p>
        <p className='text-[12px] text-white pl-4 pt-2'> offer ending in 2 days</p>
        <div className="max-w-[6rem]"> <p className= ' bg-[#5C7E10]  ml-4 text-[28px] text-white pl-1 mt-2'>-50%</p></div>
      </div>
    </div>
  )
}

export default Card