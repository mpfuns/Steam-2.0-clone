import React, {useState} from 'react'
import Tabs from '../UI/Tabs'
import TableSection from '../UI/TableSection';
import { motion, AnimatePresence} from 'framer-motion';

const Table = ({changeData, activedTabsData, startContent}) => {
    
     const[  mainColor , setMainColor ] = useState('rgba(255,160,35, 1)')
     const [ currentContent, setCurrentContent ] =useState(null)
     const [ buttonText, setButtontext]= useState('Release')
    
    
    const handleTabClick = (tab, color) => {
     changeData(tab)
        setMainColor(color);
        setCurrentContent(null)
        setButtontext(tab)
    };

const hoverMouse = (id) =>{
    const selectGame = activedTabsData.filter( data => (data.id === id))
    console.log( selectGame)
    setCurrentContent(selectGame[0])
}


 //console.log(activedTabsData)
    return (
    <div  
    
    
    className='border-slate-100 border-4 rounded-lg' style={{backgroundColor: mainColor, transition: "background-color 0.5s linear",} }>
        <Tabs handleTabClick={handleTabClick} />
        
        <div className='flex justify-between mt-4 '>
        <div className='ml-2 w-2/3'>
            {activedTabsData?.map( data=> <TableSection key={data.id} id={data.id} image={data.main_thumbnail} title={data.game_title}  genre={data.genre} price={data.price_full} percent={data.price_discount} hoverMouse={hoverMouse}   currentiD={currentContent? currentContent.id : startContent.id}/>)}
            <div className='bg-black/[0.3] text-white py-2 mb-2 flex  justify-end'>
                <div className=' mr-2'> 
                    <span>See all: </span>
                    <button className=' cursor-not-allowed border-slate-100/50 border-2 p-2 rounded hover:border-slate-100 '>{buttonText}</button>
                </div>
                </div>
        </div>
        <motion.div 
    
        layout
        key ={currentContent? currentContent.id : startContent.id}
        initial={{opacity:0}}
        animate={{opacity: 1}}
        exit={{opacity:0}}
        transition={{duration: 1}}
        
        className='w-1/3 bg-white/[0.3] mx-4 px-2 pt-2 mb-4 ' > 
        
            <h2 className='text-3xl'>{currentContent? currentContent.game_title : startContent.game_title}</h2>
            <div className=' my-4  flex flex-col items-center pl-4 bg-black/[0.4] py-4 text-white gap-1'> 
                <span>Developer: {currentContent? currentContent.developer : startContent.developer} </span>
                <span>Genre: {currentContent? currentContent.genre : startContent.genre} </span>
                <span>Publisher: {currentContent? currentContent.publisher : startContent.publisher}</span>
            </div>
            <div className='text-center '><span className=' p-2 text-white bg-black/[0.4]'>Rating: {currentContent? currentContent.rating : startContent.rating}</span></div>
            <div  className=' mt-4 flex flex-col gap-2'>
                <div><img src={currentContent? currentContent.image_1 : startContent.image_1} className=' object-cover w-full' /></div>
                <div><img src={currentContent? currentContent.image_2 : startContent.image_2} className=' object-cover w-full' /></div>
                <div><img src={currentContent? currentContent.image_3 : startContent.image_3} className=' object-cover w-full' /></div>
                <div><img src={currentContent? currentContent.image_4 : startContent.image_4} className=' object-cover w-full' /></div>
            </div>



        </motion.div>

        </div>
        

        
    </div>
  )
}

export default Table