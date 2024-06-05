import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import SpecialOffers from "./UI/SpecialOffers";
import BackgroundEfffect from "./Components/BackgroundEfffect";
import Slider from "./UI/Slider";
import  react,{ useEffect, useState } from "react";
import  gameData  from "./data/videogame_DATA.json"



// the  api  didn't work 'https://www.freetogame.com/api/games'

function App() {
  const [randomData, setRandomData] =useState(null)
   const [underTenData, setUnderTenData,] =useState(null)
   const [popularityData, setPopularityData] =useState(null)
   const [categoryData, setCategoryData] =useState(null)
   const [pcData, setPcData] =useState(null) 
   const [broswerData, setBroswerData] =useState(null) 


function  randomPick (array){
  const selceted= gameData[Math.floor(Math.random()*gameData.length)]
  const sameCopy= array.find((item) => item.id=== selceted.id)
if(sameCopy){
   randomPick(array)
}
return selceted
}
function randomArray (num){
  const newData=[]
  
  for(let i=0; i < num; i++){
    const currentItem =randomPick(newData)

      newData.push(currentItem)

   }
  
return newData

}


useEffect(() => {
  setRandomData(randomArray(12));
   
}, [])



  return (
    <div className=" bg-[rgb(27,40,56)] ">
        {/* Navbar  */ }
        <Navbar />
      <div className="lg:max-w-[90vw]  xl:max-w-[80vw]     mx-auto  ">
      
          {/* Categorites */ }
        <div className=" relative items-center  ">
            <div className="hidden   md:block">
            <div className="relative mx-[2rem]">
              <Categories />
          
            </div> 
            <div className=" z-10 absolute mt-16   left-[25%] bg-sky-800/75 p-4 rounded-lg cursor-not-allowed  ">
            <h1 className=" text-6xl text-white font-semibold " > Fun Free Games </h1>
            </div> 
            </div>
          
            <div className="block   md:hidden">
            
            <div className=" z-10 absolute mt-8  mr-[2rem] left-[20%] bg-sky-800/75 p-4 rounded-lg cursor-not-allowed  ">
            <h1 className=" text-4xl text-white font-semibold " > Fun Free Games </h1>
            </div> 
            </div>
         
          <BackgroundEfffect />
        
          </div>

          {/* Recommend  */}
         <div className=' mt-[0.2rem] text-white text-[14px]'>
          <Slider section="Recommend" data={randomData} numDots={12}/>
          
         </div>
        {/* Special offers  */}
         <div className=' mt-[0.2rem] text-white text-[14px]'>
          <Slider section="Discount Games" data={randomData} numDots={4}/>
          
         </div>
       
           </div>
      
      {/*Browse */ }
      {/* Footer  */ }
      <div  className="h-screen"></div>
    </div>
    
  );
}

export default App;
