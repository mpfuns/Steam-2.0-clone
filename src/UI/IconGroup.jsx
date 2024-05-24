import React from 'react'
import { motion, transform } from "framer-motion"

import { FaGamepad, FaFootballBall } from "react-icons/fa";
import { BiGame } from "react-icons/bi";
import { RiGameFill, RiHomeHeartFill } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { GiGameConsole, GiWingfoot, GiBulletBill, GiCardPlay } from "react-icons/gi";
import { SiGamejolt, SiGamebanana, SiRiotgames} from "react-icons/si";
import { PiGameControllerFill, PiCoinVerticalFill } from "react-icons/pi";
import { MdGames } from "react-icons/md";
import { BsPcDisplayHorizontal } from "react-icons/bs";
import { FaCirclePlay,FaBowlFood } from "react-icons/fa6";
import { GiHealthPotion, GiHeavyFighter, GiSaberToothedCatHead } from "react-icons/gi";

const IconGroup = () => {
  return (
    <motion.div 
    className='flex relative  w-full whitespace-nowrap text-9xl space-x-0.5 translate-y-[-300px]  rotate-[-10deg]'
     animate={{x:[-1000, 600, 0], y:[0,-600, 0], rotate:[-30,-30,-30], transition:{ repeat: Infinity, duration: 40}} }
    >
    <GiSaberToothedCatHead  />
      <FaGamepad  />  
      <BiGame  /> 
      <GiGameConsole   />
      <SiGamejolt  />
      <SiRiotgames  />
      <SiGamebanana />
      <PiGameControllerFill />
      <MdGames />
      <PiCoinVerticalFill  />
    <BsPcDisplayHorizontal  />
    <FaCirclePlay  /> 
    <GiHealthPotion  />
    <GiHeavyFighter />
    <RiHomeHeartFill  />
    <FaFootballBall   />
    <GiWingfoot   />
    <FaBowlFood   />
    <RiGameFill   />
    <IoGameController  />
    <GiBulletBill  />
    </motion.div>
  )
}

export default IconGroup