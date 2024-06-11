import React, {useState} from 'react'


const Tabs = ({handleTabClick}) => {
    

 
  

    return (
 
<div className=" pt-4 flex  justify-around">
            
                <button className='bg-white  text-orange-600 p-4 rounded-lg border-2 border-orange-600 ' onClick={() => handleTabClick('Release','#FFA024')}>Release Date</button>
                <button className='bg-white text-pink-500 p-4 rounded-lg border-2 border-pink-500' onClick={() => handleTabClick('Popular', '#FC8ED3')}>Popular</button>
                <button className='bg-white text-teal-500 p-4 rounded-lg border-2 border-teal-500' onClick={() => handleTabClick('Browser', '#74E6E0')}>Browser</button>
                <button className='bg-white text-lime-700 p-4 rounded-lg border-2 border-lime-700' onClick={() => handleTabClick('PC', '#B3DC2E')}>PC</button>
            </div>

   
  )
}




export default Tabs