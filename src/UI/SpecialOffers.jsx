import React, { useEffect, useState } from 'react'
import Card from './Card';
import game1 from '../assets/1.jpg'
import  game2 from '../assets/2.jpg'
function SpecialOffers({key, data, numDots }) {
   const [cards, setCards]= useState([])
   const  firstnum= numDots*key
    let endNum= numDots

    function getCards (start, end){
      let list=[]

     for(let i= start; i < end; i++){ 
  
      return list.push(data[i])
     }
      endNum +=endNum

      return console.log(list)
    
    }
    
useEffect(() => {

getCards(firstnum, endNum);

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