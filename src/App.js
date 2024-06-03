import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import SpecialOffers from "./Components/SpecialOffers";
import BackgroundEfffect from "./Components/BackgroundEfffect";
import Slider from "./UI/Slider";
import  react,{ useEffect, useState } from "react";
import axios from "axios";





function App() {
  const [randomData, setrandomData] =useState(null)
   const [relevanceData, setRelevanceData] =useState(null)
   const [popularityData, setPopularityData] =useState(null)
   const [categoryData, setCategoryData] =useState(null)
   const [pcData, setPcData] =useState(null) 
   const [broswerData, setBroswerData] =useState(null) 

   async function fecthGamesData (link){
  

const options = {
  method: 'GET',
  url: link ,
  headers: {
    'X-RapidAPI-Key': 'b1d55a6708mshf76fe5221fa817dp16f221jsnac8a17d70d0d',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com', 
   
  }
};

try {
	const response = await axios.request(options);
	 return response.data
} catch (error) {
	console.error(error);
}
   
}
function  randomPick (){
  const randomData=[]
  const allData= fecthGamesData('https://www.freetogame.com/api/games')

  const selceted= allData[Math.floor(Math.random()*allData.length)]
  //console.log(selceted)
  
  for (let i= 0; i< 12; i++ ){


  }


}


useEffect(()=>{
//.slice(0, 12)

randomPick();
 
setRelevanceData(fecthGamesData('https://www.freetogame.com/api/games?sort-by=relevance'))
//setPopularityData(fecthGamesData('https://www.freetogame.com/api/games?sort-by=popularity'))
//setPcData(fecthGamesData('https://www.freetogame.com/api/games?platform=pc'))
//setBroswerData(fecthGamesData('https://www.freetogame.com/api/games?platform=browser'))
console.log(relevanceData)

},[]);


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

         <div className=' mt-[0.2rem] text-white text-[14px]'>
          <Slider section="Features" />
         </div>
        
           {/*  SpecialOffers  */ }
        <SpecialOffers />
           </div>
      
      {/*Browse */ }
      {/* Footer  */ }
      <div  className="h-screen"></div>
    </div>
    
  );
}

export default App;
