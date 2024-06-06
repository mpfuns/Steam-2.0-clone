import React, { useEffect, useState } from 'react'
import Card from './Card';
import game1 from '../assets/1.jpg'
import  game2 from '../assets/2.jpg'
function SpecialOffers({key, data, numDots, firstNum, endNum}) {
   const [cards, setCards]= useState([])
   
    
useEffect(() => {



}, [key])


  return (
    <div className=' mt-2'>
            
            <div className="flex justify-between">
              <Card image={game1}/>
              <Card image={game1}/>
              <Card  image={game1}/>
              <Card image={game1} />
               
            </div>

    </div>
  )
}

export default SpecialOffers