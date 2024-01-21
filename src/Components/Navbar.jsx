import React from 'react'
import logo from "../assets/steam-2.0-clone.png"
import { FiMenu } from 'react-icons/fi';


const Navbar = () => {
  return (
    <div  className='bg-[#171a21]'>
      {/*Left */}
      <div className=" flex items-center justify-center  lg:justify-start py-2 px-2">
       <div className="lg:hidden left-4 absolute text-white">
        <FiMenu  className='text-[30px]'/>
       </div>
        <div className="flex items-center text-white font-semibold text-[28px] ">
        <img src={logo}  className="w-12 h-12 mr-2" />
        <p>VALVE</p>
        
        </div>
        
      </div>
      {/* Middle */}


    </div>

  )
}

export default Navbar