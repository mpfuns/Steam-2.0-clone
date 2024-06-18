import React, {useState} from 'react'
import Tabs from '../UI/Tabs'
import TableSection from '../UI/TableSection';
import { motion} from 'framer-motion';

const Table = ({changeData, activedTabsData, startContent}) => {
    
     const[  mainColor , setMainColor ] = useState('rgba(255,160,35, 1)')
     const [ currentContent, setCurrentContent ] =useState(startContent)
    
    
    const handleTabClick = (tab, color) => {
     changeData(tab)
        setMainColor(color);
    };
 console.log(activedTabsData)
    return (
    <div   className='border-slate-100 border-2' style={{backgroundColor: mainColor}}>
        <Tabs handleTabClick={handleTabClick} />
        
        <div className='flex justify-between mt-4 '>
        <div className='ml-2 w-2/3'>
            {activedTabsData?.map( data=> <TableSection key={data.id} image={data.main_thumbnail} title={data.game_title}  genre={data.genre} price={data.price_full} percent={data.price_discount}/>)}
        
        </div>
        <div className='w-1/3' > 
        
            <h4>title</h4>
            <div> 
                <span>Developer:</span>
                <span>Rating:</span>
                <span>Publisher</span>
            </div>
            <div> <span>Rating:77</span></div>
            <div>
                <img />
                <img />
                <img />
                <img />
            </div>



        </div>

        </div>
        

        
    </div>
  )
}

export default Table