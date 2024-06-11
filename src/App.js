import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import SpecialOffers from "./UI/Grouppholder";
import BackgroundEfffect from "./Components/BackgroundEfffect";
import Slider from "./Components/Slider";
import  react,{ useEffect, useState } from "react";
import  gameData  from "./data/videogame_DATA.json"; 
import  category from "./data/genre_Data.json"
import Table from "./Components/Table";



// the  api  didn't work 'https://www.freetogame.com/api/games'

function App() {
  const [randomData, setRandomData] =useState(null)
   const [underTenData, setUnderTenData,] =useState(null)
   const [popularityData, setPopularityData] =useState(null)
   const [categoryData, setCategoryData] =useState(null)
   const [pcData, setPcData] =useState(null) 
   const [broswerData, setBroswerData] =useState(null) 
   const [discountData, setDiscountData] =useState(null) 
   const [currentGames, setCurrentGames] =useState(null)
  const  sortGame= gameData.sort((a,b)=> Date.parse(a.release_date) > Date.parse(b.release_date)? -1: 1)
  const [activedTabsData, setActivedTabsData] = useState(null)

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
  setDiscountData(gameData.filter(game=> game.price_discount !== null && game.price_discount !== 0).slice(0,20))
  setCategoryData(category)
  setUnderTenData(gameData.filter(game=> game.price_full <10 || (game.price_full-((game.price_discount-game.price_full)/100))<10 ).slice(0,40))
  setPopularityData(gameData.filter(game=> game.rating <=10 && game.rating >=8).slice(0,10))
  setBroswerData(gameData.filter(game=> game.platform ==="Broswer").slice(0,10))
  setPcData(gameData.filter(game=> game.platform ==="PC").slice(0,10))
  setCurrentGames(sortGame.slice(0,10))
 setActivedTabsData(currentGames)
}, [])


function changeData(name){

if (name ==="Release"){
  setActivedTabsData(currentGames)
}
else if( name==="Popular"){
  setActivedTabsData(popularityData)
}
else  if( name==='Browser'){
  setActivedTabsData(broswerData)
} 
else{
  setActivedTabsData(pcData)
}


}




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
          <Slider section="Discount Games" data={discountData} numDots={4} numCards={5}/>
         </div>
          {/*  Categorites card slider */}
          <div className=' mt-[0.2rem] text-white text-[14px]'>
          <Slider section="Search by Category" data={categoryData} numDots={4} numCards={4}/> 
          </div>
        {/* ads */}

    {/* personalized recommendtions content*/}


    {/* Buttons */}

    {/* Under $10  slider*/}
    <div className=' mt-[0.2rem] text-white text-[14px]'>
          <Slider section="Below $10" data={underTenData} numDots={5} numCards={4}/> 
          </div>

    {/* tabs */}
<Table  changeData={changeData} activedTabsData={activedTabsData} />




    {/* ads */}
       
      </div>
      
      {/*personalized recommendtions footer */ }
      {/* Footer  */ }
      <div  className="h-screen"></div>
    </div>
    
  );
}

export default App;
