import React from 'react'
import RowIcons from './RowIcons'

const SectionIcons = () => {
 const durationDate= [1,2,3,4,5,1,2,3,4,5] 
  
  
    return (
    <div>
{ durationDate.map(time=> (<RowIcons time={time} />))}
    </div>
  )
}

export default SectionIcons