import React from 'react'
import Lottie from 'lottie-react'
import  testIdea  from "../assets/test.json"



const BackgroundEfffect = () => {
  return (
    <>
    <div className='bg-zinc-800 overflow-hidden' >  
<Lottie className='max-w-56 max-h-56 rotate-[-30deg]'  animationData={testIdea}  />
</div>
    </>
  )
}

export default BackgroundEfffect