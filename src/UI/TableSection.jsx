import React from 'react'
import { TbAppsFilled } from "react-icons/tb";

const TableSection = ({image, title, genre, price, percent}) => {

    const sale= (percent * price ) /100
    const priceAfterDiscount= (price-sale).toFixed(2)
  

  return (
    <div className='flex '>
        <div> <img src ={image} /></div>
        <div  className='flex justify-between'>
           <div>
            <p>{title}</p>
            <div><TbAppsFilled /></div>
            <p>{genre}</p>
            </div> 
            <div>
             math
            </div>
        </div>

    </div>
  )
}

export default TableSection