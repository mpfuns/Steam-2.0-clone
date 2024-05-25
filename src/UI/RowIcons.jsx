import React from 'react'
import IconGroup from './IconGroup'
import { motion, transform } from "framer-motion"

const RowIcons = ({time}) => {
  return (
    <motion.div className=''
    animate={{x:[-3000, -100], y:[-300,-600], rotate:[-30,-30], opacity:[0,1,1,0]}}
    transition={{
       duration:20,
       repeat: Infinity, 
       ease:"linear",
       delay:`-${time}`,
    }}


   
    >
    <div  className='flex space-y-6 space-x-6 items-center'>
        <IconGroup />
        <IconGroup />
        <IconGroup />
        <IconGroup />
    </div>
  </motion.div>
  )
}

export default RowIcons