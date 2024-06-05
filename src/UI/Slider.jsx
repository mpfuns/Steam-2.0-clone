import React, {useState, useEffect} from 'react';
import  {BsChevronLeft, BsChevronRight} from  "react-icons/bs";
import {RxDotFilled} from 'react-icons/rx';
import Recommend from './Recommend';


const Slider = ({ section, data}) => {

    const  [currentIndex, setCurrentIndex] = useState(0);
   
    const [ autoPlay,  setAutoPlay] = useState(true)
    let timeOut= null;
   


 useEffect(() => {
    timeOut=autoPlay && setTimeout(() =>{ nextSlide();}, 2500)
 })



    const  prevSlide = () => {
         const  isFirstSlide= currentIndex=== 0
          const newIndex= isFirstSlide? data.length -1 : currentIndex -1;

           setCurrentIndex(newIndex)
    }
    const  nextSlide = () => {
        const  isLastSlide= currentIndex=== data?.length-1
        const newIndex= isLastSlide? 0 : currentIndex +1;

         setCurrentIndex(newIndex)
    }
     const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
     }

  return (
    <div className='max-w-[1400px] w-full m-auto py-16 px-4 relative'>
         {/*title */}
         <p>{section}</p>
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


        {data ?<Recommend key={data[currentIndex].id} image={data[currentIndex].main_thumbnail} data={data[currentIndex]} />: <div className="h-[24rem] "></div>}

        </div>

        

        {/* right  arrow  */}
        <div className=' absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl r rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronRight onClick={nextSlide} size={40}/>
        </div>
        

        </div>
        <div className='flex top-4 justify-center py-2'>
            {data? (data.map((data, dataIndex) => (
                <div  style={{opacity:dataIndex=== currentIndex? "1" :"0.5", transition: "opacity 1s" }}  key={dataIndex} onClick={()=> goToSlide(dataIndex)} className='text-2xl cursor-pointer'>
                    <RxDotFilled size={40} />
                     </div>
            ))) :  ( new Array(10).map((_, dataIndex) => (
                <div  style={{opacity:dataIndex=== currentIndex? "1" :"0.5", transition: "opacity 1s" }}  key={dataIndex} onClick={()=> goToSlide(dataIndex)} className='text-2xl cursor-pointer'>
                    <RxDotFilled size={40} />
                     </div>
            )))}
        </div>
    </div>
  )
}

export default Slider