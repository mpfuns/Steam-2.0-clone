import React from 'react'
import { TbAppsFilled } from "react-icons/tb";

const TableSection = ({image, title, genre, price, percent}) => {

    const sale= (percent * price ) /100
    const priceAfterDiscount= (price-sale).toFixed(2)
  

  return (
    <div className='flex  items-center justify-between pb-3 mb-4 bg-black/[0.3] text-white drop-shadow-xl border-2 border-none  hover:bg-white/[0.3] hover:text-black'>
        
        <div className=' flex items-center'>
        <div className=' mt-3'> <img src ={image} /></div>
           <div  className='flex flex-col justify-around  ml-3 '>
            <p>{title}</p>
            <div><TbAppsFilled /></div>
            <p>{genre}</p>
            </div> 
            </div>
            <div className='mr-2'>
             {sale?
             ( <div className=' flex justify-between gap-10 items-center '>
              <div className='bg-green-700 text-green-300 p-2 '> 
                {percent}%
                </div>
                <div className=' flex flex-col items-center '>
                 <span className=' line-through text-xs text-gray-400'>${price.toFixed(2)}</span>
                 <span>${priceAfterDiscount}</span>
                  </div>

             </div>) 
             
             : (<div className=' flex   '><span>${price.toFixed(2)}</span></div>)}
         


            </div>
        </div>

  
  )
}

export default TableSection