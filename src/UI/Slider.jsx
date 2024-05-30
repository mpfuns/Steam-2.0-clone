import React, {useState} from 'react'
import  {BsChevronLeft, BsChevronRight} from  "react-icons/bs"
import {RxDotFilled} from 'react-icons/rx'


const Slider = () => {
    const cards=[{wallpaper:"https://images.unsplash.com/photo-1593277992013-05e17a5f417d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , title:"Gaming Room"},
    {wallpaper:"https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , title:"Gaming Room 1"},
    {wallpaper: "https://images.unsplash.com/photo-1585857188938-2f7ae5afb6f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , title:"Gaming Room 2"},
    
    ]

    const  [currentIndex, setCurrentIndex] = useState(0)

    const  prevSlide = () => {
         const  isFirstSlide= currentIndex=== 0
          const newIndex= isFirstSlide? cards.length -1 : currentIndex -1;

           setCurrentIndex(newIndex)
    }
    const  nextSlide = () => {
        const  isLastSlide= currentIndex=== cards.length-1
        const newIndex= isLastSlide? 0 : currentIndex +1;

         setCurrentIndex(newIndex)
    }
     const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
     }

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
        
        <div style={{backgroundImage: `url(${cards[currentIndex].wallpaper})`}} className='w-full h-full  rounded-2xl bg-center bg-cover duration-500'>
        {/* Left  arrow   */}
        <div className=' absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl r rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronLeft onClick={prevSlide} size={30}/>
        </div>

        {/* right  arrow  */}
        <div className=' absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl r rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronRight onClick={nextSlide} size={30}/>
        </div>
        

        </div>
        <div className='flex top-4 justify-center py-2'>
            { cards.map((card, cardIndex) => (
                <div key={cardIndex} onClick={()=> goToSlide(cardIndex)} className='text-2xl cursor-pointer'>
                    <RxDotFilled />
                     </div>
            ))}
        </div>
    </div>
  )
}

export default Slider