import React from 'react'

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
    <div 
    className='flex  relative whitespace-nowrap w-full  text-6xl space-x-2 '
    
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
    </div>
  )
}

export default IconGroup