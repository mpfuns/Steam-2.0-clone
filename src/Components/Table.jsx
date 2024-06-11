import React, {useState} from 'react'
import Tabs from '../UI/Tabs'
import TableSection from '../UI/TableSection';

const Table = ({changeData, activedTabsData}) => {
    
     const[  mainColor , setMainColor ] = useState('#FFA024')
    
    
    const handleTabClick = (tab, color) => {
     changeData(tab)
        setMainColor(color);
    };
 console.log(activedTabsData)
    return (
    <div    style={{backgroundColor: mainColor}}>
        <Tabs handleTabClick={handleTabClick} />
        
        <div className='flex justify-between'>
        <div className='mt-4'>
            {activedTabsData?.map( data=> <TableSection image={data.main_thumbnail} title={data.game_title}  genre={data.genre} price={data.price_full} percent={data.price_discount}/>)}
        
        </div>
        <div> 
            show 
        </div>

        </div>
        

        
    </div>
  )
}

export default Table