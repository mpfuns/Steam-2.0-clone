import React from 'react'
import IconGroup from './IconGroup'
import { motion, transform } from "framer-motion"

const RowIcons = () => {
  return (
    <motion.div className='rotate-[-30deg] translate-y-[-600px] translate-x-[-2500px]'
   
    >
    <div  className='flex space-y-6 space-x-2 items-center'>
        <IconGroup />
        <IconGroup />
        <IconGroup />
        <IconGroup />
    </div>
  </motion.div>
  )
}

export default RowIcons