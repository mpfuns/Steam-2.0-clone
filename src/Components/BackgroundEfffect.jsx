import React from 'react'
import Lottie from 'lottie-react'
import  testIdea  from "../assets/test.json"



const BackgroundEfffect = () => {
  return (
    <>
    <div >  
<Lottie className='max-w-56 max-h-56 rotate-[-30deg]'  animationData={testIdea}  />
</div>
    </>
  )
}

export default BackgroundEfffect