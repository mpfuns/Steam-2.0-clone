import React from 'react'
import gaming from "../assets/gaming.jpg";
import Card from './Card';
function SpecialOffers() {
    const cards=[{wallpaper: gaming , title:"Gaming Room"},
                 {wallpaper: gaming , title:"Gaming Room"},
                 {wallpaper: gaming , title:"Gaming Room"},
                 {wallpaper: gaming , title:"Gaming Room"},
                 {wallpaper: gaming , title:"Gaming Room"},
                 {wallpaper: gaming , title:"Gaming Room"}]
  return (
    <div className='mx-[2-rem]'>
            <p className='text-white pt-4'>Discount Games</p>
            <div className="">
                {cards.map((card) =>{
                    <Card />
                })}
            </div>

    </div>
  )
}

export default SpecialOffers