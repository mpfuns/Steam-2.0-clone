import React from 'react'
import logo from "../assets/steam-2.0-clone.png"
import { FiMenu } from 'react-icons/fi';
import { GoDesktopDownload } from "react-icons/go";


const Navbar = () => {
  return (
    <div  className=' flex  items-center bg-[#171a21]'>
      {/*Left */}
      <div className=" flex items-center justify-center  lg:justify-start py-2 px-2 lg:py-6 lg:py-6 lg:px-8 w-full lg:w-auto">
       <div className="lg:hidden left-4 absolute text-white">
        <FiMenu  className='text-[30px]'/>
       </div>
        <div className="flex items-center text-[#C5C3C0] font-semibold text-[26px] ">
        <img src={logo}  className="w-12 h-12 mr-2" />
        <p>VALVE</p>
        
        </div>
        
      </div>
      {/* Middle */}
        <div className=" hidden lg:flex pl-10">
          <ul className='text-[#C5C3C0] text-[14px] flex gap-5'>
            <li>
              <p>SHOP</p>
            </li>
            <li>
              <p> EXPLORE</p>
            </li>
            <li>
              <p>INFO</p>
            </li>
            <li>
              <p>CONTACT</p>
            </li>
          </ul>
        </div>
    {/* Right */}
          <div className="absolute  text-white right-10 top-0 ">
        
            <div className="flex items-center bg-[#5C7E10] px-2 py-1 mt-2 rounded-[0.3rem] text-[12px] flex items-center">
            <GoDesktopDownload  className='mr-2'/>
              <p className=''>Download App</p>
            </div>
            <div className="">
              <p>sign in</p>
            </div>
          </div>
    </div>

  )
}

export default Navbar