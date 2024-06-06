import React, { useEffect, useState } from 'react'
import Card from './Card';
import game1 from '../assets/1.jpg'
import  game2 from '../assets/2.jpg'
function SpecialOffers({key, data, numDots, firstNum, endNum}) {
   const [cards, setCards]= useState([])
   const updateData= data.slice(firstNum,endNum)
    
useEffect(() => {

 setCards(updateData)
 console.log(`starr:${firstNum} end: ${endNum}`)
 console.log(updateData)

}, [ firstNum, endNum])


  return (
    <div className=' mt-2'>
            
            <div className="flex justify-between">
              {cards.map((item)=>(<Card image={item.main_thumbnail} title={item.game_title} percent={item.price_discount} price={item.price_full}/>))}
               
            </div>

    </div>
  )
}

export default SpecialOffers