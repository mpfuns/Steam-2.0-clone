import React, {useState} from 'react'
import { TbAppsFilled } from "react-icons/tb";
import { motion, AnimatePresence } from 'framer-motion';

function Recommend({image, key, data}) {

    const [thumbnailDisplay, setThumbnailDisplay] = useState("main")
  return (
    
    < motion.div 
    layout
    key={key}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration: 1}}
        className=' '
    > 
     {/* Feature  */}
     <div className="h-full md:h-[24rem] w-full flex  flex-col  md:flex-row pt-3">
        <div className="w-full md:w-[62%]  h-full flex shadow-lg">
            {/*  where  image or gerne will display */}
            <img src={image} alt=""  className="object-cover w-full"/>
        </div>
        <div className="bg-[#0f1922] h-full w-full md:w-[38%] flex flex-col justify-between  ">
            <div className="  flex flex-col  items-center">
            <p className='text-[20px] mt-3'>{data.game_title}</p>
            <div className="pr-4 w-full h-[24rem]  md:h-[15rem] pt-3 ">
                
                <div className="h-[35%] w-full flex pb-1 ">
                    {/* when  onMosueenter in "Image||genre||etc"  pass down the  string  to  change state  to  the string  display image */}
                    {/* When on Mouseleave change  state back  to "thumbnail" */}
                    <div  className="object-cover w-[50%] mr-2 max-h-[100px] overflow-hidden" ><img src={data.image_1} alt=""  className="object-cover w-full "/> </div>
                    <div  className="object-cover w-[50%] mr-1 max-h-[100px] overflow-hidden" > <img src={data.image_2} alt=""  className="object-cover w-full "/></div>
                </div>
                <div className="h-[35%] w-full flex pt-1 ">
                <div  className="object-cover w-[50%] mr-2 max-h-[100px] overflow-hidden" > <img src={data.image_3} alt=""  className="object-cover w-full  "/></div>
                    <div  className="object-cover w-[50%] mr-1 max-h-[100px] overflow-hidden" > <img src={data.image_4} alt=""  className="object-cover w-full "/></div>
                </div>
                <div className=" flex flex-col  items-center md:items-start">
                     <p className='text-[22px] pt-4 ml-2'>{data.platform}</p>
                     <div className="bg-[#8cc414] w-[7rem] rounded-[0.5rem] mt-1 ml-2">
                       <p className='text-[15px]  text-center'>{data.genre}</p> 
                     </div>
                </div>  
              
             </div> 
        </div>
        <div className=" flex items-center justify-center  md:justify-between pr-4 gap-4 md:gap-0 -mt-4  md:mt-0 pb-2  md:pb-0">
            <div className="pl-4  pb-4"> 
                <p className='text-[20px]  md:text-[12px]'>$29.99 </p>
            </div>
            <TbAppsFilled  className='text-[26px] md:text-[20px]  mb-[10px] cursor-not-allowed'/>
        </div>
        
        
        </div>

     </div>
    </motion.div>
   
  )
}

export default Recommend