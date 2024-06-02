import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import SpecialOffers from "./Components/SpecialOffers";
import BackgroundEfffect from "./Components/BackgroundEfffect";
import Slider from "./UI/Slider";
import axois  from 'axios'
import { useEffect } from "react";
import axios from "axios";




function App() {

async function fecthGamesData (){
  

const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'X-RapidAPI-Key': 'b1d55a6708mshf76fe5221fa817dp16f221jsnac8a17d70d0d',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
   
}


useEffect(()=>{

  fecthGamesData();
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
          <Slider />
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
