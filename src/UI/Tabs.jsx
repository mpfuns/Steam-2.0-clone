import React, {useState} from 'react'


const Tabs = ({handleTabClick}) => {
    

 // rgba(255,160,35, 0.5)
 //rgba(250,142,211 , 0.5)
 //rgba(116,230,224, 0.5)
 //rgba(179,220,46, 0.5)

  

    return (
 
<div className=" pt-4 flex  justify-around">
            
                <button className='bg-white  text-orange-600 p-4 rounded-lg border-2 border-orange-600 ' onClick={() => handleTabClick('Release','rgba(255,160,35, 1)')}>Release Date</button>
                <button className='bg-white text-pink-500 p-4 rounded-lg border-2 border-pink-500' onClick={() => handleTabClick('Popular', 'rgba(250,142,211 , 1)')}>Popular</button>
                <button className='bg-white text-teal-500 p-4 rounded-lg border-2 border-teal-500' onClick={() => handleTabClick('Browser', 'rgba(116,230,224, 1)')}>Browser</button>
                <button className='bg-white text-lime-700 p-4 rounded-lg border-2 border-lime-700' onClick={() => handleTabClick('PC', 'rgba(179,220,46, 1)')}>PC</button>
            </div>

   
  )
}




export default Tabs