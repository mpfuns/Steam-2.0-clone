import React, {useState, useEffect} from 'react';
import  {BsChevronLeft, BsChevronRight} from  "react-icons/bs";
import {RxDotFilled} from 'react-icons/rx';
import Recommend from './Recommend';


const Slider = ({ section}) => {
    const cards=[{wallpaper:"https://images.unsplash.com/photo-1593277992013-05e17a5f417d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , title:"Gaming Room"},
    {wallpaper:"https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , title:"Gaming Room 1"},
    {wallpaper: "https://images.unsplash.com/photo-1585857188938-2f7ae5afb6f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , title:"Gaming Room 2"},
    
    ]
    const  [currentIndex, setCurrentIndex] = useState(0);
   
    const [ autoPlay,  setAutoPlay] = useState(true)
    let timeOut= null;
   


 useEffect(() => {
    timeOut=autoPlay && setTimeout(() =>{ nextSlide();}, 2500)
 })



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
    <div className='max-w-[1400px] w-full m-auto py-16 px-4 relative'>
         {/*title */}
         <p>NEW GAMES</p>
        <div  className='w-full h-full  rounded-2xl bg-center' 
        onMouseEnter={()=>{
            setAutoPlay(false);
            clearTimeout(timeOut);
        
        }} 
        onMouseLeave={()=>{setAutoPlay(true);}}>
        {/* Left  arrow   */}
        <div className=' absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl r rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronLeft onClick={prevSlide} size={40}/>
        </div>
        {/* Content */}

        <div className='relative mx-[4rem]'>
        <Recommend  image={cards[currentIndex].wallpaper}  />

        </div>

        

        {/* right  arrow  */}
        <div className=' absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl r rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronRight onClick={nextSlide} size={40}/>
        </div>
        

        </div>
        <div className='flex top-4 justify-center py-2'>
            { cards.map((card, cardIndex) => (
                <div  style={{opacity:cardIndex=== currentIndex? "1" :"0.5", transition: "opacity 1s" }}  key={cardIndex} onClick={()=> goToSlide(cardIndex)} className='text-2xl cursor-pointer'>
                    <RxDotFilled size={40} />
                     </div>
            ))}
        </div>
    </div>
  )
}

export default Slider