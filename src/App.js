import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import Recommend from "./UI/Recommend";
import SpecialOffers from "./Components/SpecialOffers";
import BackgroundEfffect from "./Components/BackgroundEfffect";
import Slider from "./UI/Slider";




function App() {
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

<Slider />
          
         {/* Recommend */ }
         <div className='mx-[2rem] mt-[2rem] text-white text-[14px]'>
           {/*title */}
          <p>NEW GAMES</p>
         <Recommend />
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
