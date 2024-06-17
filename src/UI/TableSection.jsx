import React from 'react'
import { TbAppsFilled } from "react-icons/tb";

const TableSection = ({image, title, genre, price, percent}) => {

    const sale= (percent * price ) /100
    const priceAfterDiscount= (price-sale).toFixed(2)
  

  return (
    <div className='flex  pb-3'>
        <div> <img src ={image} /></div>
        <div  className='flex items-center max-w-80 justify-between ml-3 '>
           <div  className=' flex flex-col justify-around'>
            <p>{title}</p>
            <div><TbAppsFilled /></div>
            <p>{genre}</p>
            </div> 
            <div>

            
             {sale?
             ( <div className=' '>
              <div className=''> 
                {percent}%
                </div>
                <div>
                 <span>{price.toFixed(2)}</span>
                 <span>{priceAfterDiscount}</span>
                  </div>

             </div>) 
             
             : (<div className=' flex   '><span>{price.toFixed(2)}</span></div>)}
         


            </div>
        </div>

    </div>
  )
}

export default TableSection