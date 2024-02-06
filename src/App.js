import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import Recommended from "./Components/Recommended";
import SpecialOffers from "./Components/SpecialOffers";


function App() {
  return (
    <div className=" bg-[#1b2838] ">
        {/* Navbar  */ }
        <Navbar />
      <div className="lg:max-w-[90vw]  xl:max-w-[80vw]     mx-auto  ">
      
          {/* Categorites */ }
          <Categories />
         {/* Recommend */ }
           <Recommended />
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
