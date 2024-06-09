import React, { useEffect, useState } from 'react'
import Card from './Card';
import game1 from '../assets/1.jpg'
import  game2 from '../assets/2.jpg'
function SpecialOffers({key, data, numDots, firstNum, endNum, type}) {
   const [cards, setCards]= useState([])

   const updateData= data.slice(firstNum,endNum).map((item)=>{ return  {...item, 
      days: randomDays()
   }})
  

 function randomDays (){
   return Math.floor((Math.random()*6)+1)
 }


useEffect(() => {

 setCards(updateData)
 console.log(`starr:${firstNum} end: ${endNum}`)
 console.log(updateData)
 

}, [ firstNum, endNum])


  return (
    <div className=' mt-1'>
            <div className="flex place-content-between">
              {cards.map((item)=>(<Card image={item.main_thumbnail} title={item.game_title} percent={item.price_discount} price={item.price_full} days={item.days} type={type} data={item} key={key} />))}
               
            </div>

    </div>
  )
}

export default SpecialOffers