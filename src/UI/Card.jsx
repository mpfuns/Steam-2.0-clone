import React from 'react'

function Card({image, title, percent, price, days }) {
  
  const sale= (percent * price ) /100
    const priceAfterDiscount= (price-sale).toFixed(2)
  
  
  return (
    <div className=' ml-4 max-w-44'>
      <div className='h-[8rem]'>
      <img src={image} alt=""  className=' object-fit w-full h-full'/>
      </div>

      <div className="bg-[#1F7499] h-[8rem]" >
        <div className='flex'>
        <p className='text-[15px]  text-gray-600 pl-4 pt-2 line-through'>${price.toFixed(2)} </p>
        <p className='text-[20px] text-white pl-4 pt-2'>${priceAfterDiscount} </p>
        </div>
        
        <p className='text-[12px] text-white pl-4 pt-2'> offer ending in {days} days</p>
        <div className="max-w-[6rem]"> <p className= ' bg-[#5C7E10]  ml-4 text-[28px] text-white pl-1 mt-2'>-{percent}%</p></div>
      </div>
    </div>
  )
}

export default Card