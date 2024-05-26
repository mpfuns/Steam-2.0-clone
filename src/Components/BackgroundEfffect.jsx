import React from 'react'
import Lottie from 'lottie-react'
import  backgroundElement  from "../assets/backgroundeffect.json"



const BackgroundEfffect = () => {
  return (
      <>
      <div className='bg-zinc-800 overflow-hidden hidden md:block' >
        <Lottie className='max-w-full rotate-[-10deg] max-h-56 '  animationData={backgroundElement}  />
      </div>
      <div className='bg-zinc-800 overflow-hidden block md:hidden' >
        <Lottie className=' '  animationData={backgroundElement}  />
      </div>
      </>
  )
}

export default BackgroundEfffect