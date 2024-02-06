import React from 'react'
import gaming from "../assets/gaming.jpg";
import Card from './Card';
import game1 from '../assets/1.jpg'
import  game2 from '../assets/2.jpg'
function SpecialOffers() {
    const cards=[{wallpaper: game1 , title:"Gaming Room"},
                 {wallpaper:  game2 , title:"Gaming Room"},
                 {wallpaper: game1 , title:"Gaming Room"},
                 {wallpaper:  game2 , title:"Gaming Room"},
                 {wallpaper: game1 , title:"Gaming Room"},
                 {wallpaper:  game2 , title:"Gaming Room"},
                 {wallpaper: game1 , title:"Gaming Room"},
                 {wallpaper:  game2 , title:"Gaming Room"},
                 {wallpaper: game1 , title:"Gaming Room"},
                 {wallpaper:  game2 , title:"Gaming Room"},
                 ]
  return (
    <div className='mx-[2-rem] '>
            <p className='text-white pt-6'>Discount Games</p>
            <div className=" grid grid-cols-2 md:grid-cols-3  gap-4 pt-3">
                {cards.map((card) =>(
                  <Card  wallpaper={card.wallpaper} title={card.title} />
                )
                    
                )}
            </div>

    </div>
  )
}

export default SpecialOffers