import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import Recommend from "./UI/Recommend";
import SpecialOffers from "./Components/SpecialOffers";
import BackgroundEfffect from "./Components/BackgroundEfffect";




function App() {
  return (
    <div className=" bg-[rgb(27,40,56)] ">
        {/* Navbar  */ }
        <Navbar />
      <div className="lg:max-w-[90vw]  xl:max-w-[80vw]     mx-auto  ">
      
          {/* Categorites */ }
          <div>
          <Categories />
          <BackgroundEfffect />
        
          </div>
          
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
