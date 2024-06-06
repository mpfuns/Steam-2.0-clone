import React, {useState, useEffect} from 'react';
import  {BsChevronLeft, BsChevronRight} from  "react-icons/bs";
import {RxDotFilled} from 'react-icons/rx';
import Recommend from './Recommend';
import SpecialOffers from './SpecialOffers';


const Slider = ({ section, data, numDots}) => {

    const  [currentIndex, setCurrentIndex] = useState(0);
    const [ autoPlay,  setAutoPlay] = useState(true)
    let timeOut= null;
    const [firstNum, setFirstNum]= useState(0)
    const [endNum, setEndNum]= useState(numDots)


 useEffect(() => {

    if( section=== "Recommend"){
        timeOut=autoPlay && setTimeout(() =>{ nextSlide();}, 2500)
    }
    
 })



    const  prevSlide = () => {
        /* subart 4 from end number */
         const  isFirstSlide= currentIndex=== 0
          const newIndex= isFirstSlide?  numDots-1 : currentIndex -1;
          /* slice (newStart,newEnd) */
          const newStart=  isFirstSlide? data.lenght- numDots: (newIndex*numDots)
        const newEnd= ((numDots*newIndex)+numDots)

           
        setCurrentIndex(newIndex)
           setFirstNum(newStart)
           setEndNum(newEnd)
    }
    const  nextSlide = () => {
         /* add 4 from end number */
        const  isLastSlide= currentIndex=== numDots-1
        const newIndex= isLastSlide? 0 : currentIndex +1;
        const newStart=  isLastSlide? 0: (numDots*newIndex)
        const newEnd= ((numDots*newIndex)+numDots)

       
        setFirstNum(newStart)
        setEndNum(newEnd)
        setCurrentIndex(newIndex)
    }
     const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
        const newStart=  (numDots* slideIndex)
        const newEnd= ((numDots*slideIndex)+numDots)
       
        setFirstNum(newStart)
        setEndNum(newEnd)
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

        {section ==="Recommend" && data ? (<Recommend key={data[currentIndex].id} image={data[currentIndex].main_thumbnail} data={data[currentIndex]} />):section!=="Discount Games"? (<div className="h-[24rem] "></div>) : (<></>)}

        {section ==="Discount Games" && data ? (<SpecialOffers key={currentIndex}  data={data} numDots={numDots} firstNum={firstNum} endNum={endNum}/>): section!=="Recommend"? (<div className="h-[24rem] "></div>) : (<></>)}


        </div>

        

        {/* right  arrow  */}
        <div className=' absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl r rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronRight onClick={nextSlide} size={40}/>
        </div>
        

        </div>
        <div className='flex top-4 justify-center py-2'>
            { (new Array(numDots).fill(0).map((_, dataIndex) => (
                <div  style={{opacity:dataIndex=== currentIndex? "1" :"0.5", transition: "opacity 1s" }}  key={dataIndex} onClick={()=> goToSlide(dataIndex)} className='text-2xl cursor-pointer'>
                    <RxDotFilled size={40} />
                     </div>
            )))}
        </div>
    </div>
  )
}

export default Slider