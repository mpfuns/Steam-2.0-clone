import React, { useState } from 'react'
import { motion, AnimatePresence} from 'framer-motion';
function Card({image, title, percent, price, days, type, data,key}) {
  
  const sale= (percent * price ) /100
  const priceAfterDiscount= (price-sale).toFixed(2)

  
  return (

     
    <AnimatePresence mode="wait">
      
      <motion.div className=' ml-4 max-w-[210px] relative cursor-not-allowed'
      
      layout
       key={key}
           initial={{opacity:0}}
           animate={{opacity:1}}
           exit={{opacity:0}}
           transition={{duration: 1}}
      >
    

      
       {type=== "discount"  && (
       < motion.div 
           className=' '  
           whileHover={{scale:1.2, filter: "brightness(0.8)" }}
       > 
          <div className='h-[8rem] max-w-64 cursor-not-allowed'>
          <img src={image} alt=""  className=' object-cover w-full  h-full'/>
          </div>
        <div className="bg-[#1F7499] h-[8rem] w-full" >
          
        <div className='flex'>
        <p className='text-[15px]  text-gray-600 pl-4 pt-2 line-through'>{price === 0? "Free" : `$${price.toFixed(2)}`} </p>
        <p className='text-[20px] text-white pl-4 pt-2'>{priceAfterDiscount === 0? "Free" :  `$${priceAfterDiscount}`} </p>
        </div>
        
          <p className='text-[12px] text-white pl-4 pt-2'> offer ending in {days} days</p>
        <div className="max-w-[6rem]"> <p className= ' bg-[#5C7E10]  ml-4 text-[28px] text-white pl-1 mt-2'>-{percent}%</p></div>
        </div>
        </motion.div>
         )}

         { type=== "category" && (
          <motion.div whileHover={{scale:0.9, filter: "brightness(1.2)" }}>
          <div className='h-full ' style={{background: `${data.background_color}`}}>

          <div className=' relative h-[12rem] '>
          <div className=' absolute w-full h-full ' style={{background: `linear-gradient(360deg, ${data.background_color} 0%, rgba(229,231,235,0) 100%)`}}></div>
          <img src={data.image} alt=""  className=' object-cover w-full  h-full'/>
         
          </div> 
         <div className='h-[4rem] text-2xl text-center text-black px-4' >
         <p >{data.genre.toUpperCase()}</p>
         </div>
        </div>
        </motion.div>
        
        )}
           
     
        {type=== '$10' && (
          < motion.div 
          className=' '  
          whileHover={{scale:1.2, filter: "brightness(0.8)" }}
      > 
         <div className='h-[8rem] w-full cursor-not-allowed'>
         <img src={image} alt=""  className=' object-cover w-full  h-full'/>
         </div>
       <div className="bg-[#1F7499] h-[2rem] w-full px-10" >
         
       <div className='flex ml-2 '>
       {sale? 
          (<div className='flex bg-[#295b72] gap-2 pr-1  '>
          <p className=' bg-[#5C7E10] px-1'>-{percent}%</p>
          <p className=' line-through text-gray-300'>${price.toFixed(2)}</p>
          <p>${priceAfterDiscount}</p>
     
          
          </div>)
          :(<div className='bg-[#295b72] px-1'>{price === 0? "Free" : `$${price.toFixed(2)}`}</div>)}
       </div>
       </div>
       </motion.div>
        )}
      
    </motion.div>

    </AnimatePresence>


  )
}

export default Card