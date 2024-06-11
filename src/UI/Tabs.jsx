import React, {useState} from 'react'


const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Release');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
  

    return (
    <div>
<div className="  flex  justify-around">
            
                <button className='bg-white  text-orange-600 p-4 rounded-lg border-2 border-orange-600 ' onClick={() => handleTabClick('Release')}>Release Date</button>
                <button className='bg-white text-pink-500 p-4 rounded-lg border-2 border-pink-500' onClick={() => handleTabClick('Popular')}>Popular</button>
                <button className='bg-white text-teal-500 p-4 rounded-lg border-2 border-teal-500' onClick={() => handleTabClick('Playstation')}>Playstation</button>
                <button className='bg-white text-lime-700 p-4 rounded-lg border-2 border-lime-700' onClick={() => handleTabClick('Xbox')}>Xbox</button>
            </div>

    </div>
  )
}




export default Tabs