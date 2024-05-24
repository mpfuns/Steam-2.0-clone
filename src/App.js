import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";

import SpecialOffers from "./Components/SpecialOffers";


function App() {
  return (
    <div className=" bg-[rgb(27,40,56)] ">
        {/* Navbar  */ }
        <Navbar />
      <div className="lg:max-w-[90vw]  xl:max-w-[80vw]     mx-auto  ">
      
          {/* Categorites */ }
          <Categories />
         {/* Recommend */ }
         
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
