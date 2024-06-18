import React, {useState, useEffect} from 'react';
import  {BsChevronLeft, BsChevronRight} from  "react-icons/bs";
import {RxDotFilled} from 'react-icons/rx';
import Recommend from '../UI/Recommend';
import GroupHolder from '../UI/Grouppholder';



const Slider = ({ section, data, numDots, numCards}) => {

    const  [currentIndex, setCurrentIndex] = useState(0);
    const [ autoPlay,  setAutoPlay] = useState(true)
    let timeOut= null;
    const [firstNum, setFirstNum]= useState(0)
    const [endNum, setEndNum]= useState(numCards)


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
          const newStart=  isFirstSlide? data.length- numCards: (newIndex*numCards)
        const newEnd= isFirstSlide? data.length :((numCards*newIndex)+numCards)

           
        setCurrentIndex(newIndex)
           setFirstNum(newStart)
           setEndNum(newEnd)
    }
    const  nextSlide = () => {
         /* add 4 from end number */
        const  isLastSlide= currentIndex=== numDots-1
        const newIndex= isLastSlide? 0 : currentIndex +1;
        const newStart=  isLastSlide? 0: (numCards*newIndex)
        const newEnd= ((numCards*newIndex)+numCards)

       
        setFirstNum(newStart)
        setEndNum(newEnd)
        setCurrentIndex(newIndex)
    }
     const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
        const newStart=  (numCards* slideIndex)
        const newEnd= ((numCards*slideIndex)+numCards)
       
        setFirstNum(newStart)
        setEndNum(newEnd)
     }

  return (
    <div className='max-w-[1400px] w-full m-auto py-16 px-4 relative'>
         {/*title */}
         <h3>{section}</h3>
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

        {section ==="Recommend" && data ? (<Recommend key={data[currentIndex].id} image={data[currentIndex].main_thumbnail} data={data[currentIndex]} />):section!=="Discount Games" && section!=="Search by Category" && section !=="Below $10"  ? (<div className="h-[24rem] "></div>) : (<></>)}

        {section ==="Discount Games"  && data ? (<GroupHolder key={currentIndex}  data={data} numDots={numDots} firstNum={firstNum} endNum={endNum} type="discount" />): section!=="Recommend" && section!=="Search by Category" && section !=="Below $10" ? (<div className="h-[24rem] "></div>) : (<></>)}

        {section ==="Search by Category"  && data ? (<GroupHolder key={currentIndex}  data={data} numDots={numDots} firstNum={firstNum} endNum={endNum} type="category"/>): section!=="Recommend" && section!=="Discount Games"&& section !=="Below $10" ? (<div className="h-[24rem] "></div>) : (<></>)}
        
        {section ==="Below $10"  && data ? (<GroupHolder key={currentIndex}  data={data} numDots={numDots} firstNum={firstNum} endNum={endNum} type="$10"/>): section!=="Recommend" && section!=="Discount Games" && section!=="Search by Category"? (<div className="h-[24rem] "></div>) : (<></>)}

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