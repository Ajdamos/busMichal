import React, {useRef, useState, createContext} from "react";
import { MyContext } from "./MyContext";
import Point from "./Point";
import {NorthRouteText, SourthRouteText, NorthPoints, SouthPoints} from './texts'
function App() {
  const[chosenPoint, setChosenPoint] = useState(0)
  const[route, setRoute] = useState("north")
  const north = [
    <Point name="Blansko" number={0}/>,
    <Point name="Rájec-Jestřebí" number={1}/>,
    <Point name="Boskovice"  number={2}/>,
    <Point name="Kunštát"  number={3}/>,
    <Point name="Letovice" number={4}/>,
    <Point name="Velké Opatovice" number={5}/>
  ]

  const south = [
    <Point name="Blansko" number={0}/>,
    <Point name="Adamov"  number={1}/>,
    <Point name="Bílovice nad Svitavou"number={2} />,
    <Point name="Mokrá-Horákov"  number={3}/>,
    <Point name="Křtiny" number={4}/>,
    <Point name="Jedovnice" number={5}/>
  ]

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };



  return (
    <MyContext.Provider value={{chosenPoint, setChosenPoint}}>
    <div className="h-screen bg-dark">
      <div className="flex h-[80vh] justify-evenly flex-col items-center">
        <img src="logo.png" width="200px" alt="Logo" />
        <h1 className="font-serif font-bold italic text-light text-6xl">Blansko Bus</h1>
        <h2 className="font-serif text-light text-3xl">Michal Boháček</h2>
        <div className="w-[200px] h-[60px] flex justify-center items-center border border-light skew-x-[-30deg] text-light hover:bg-light hover:text-dark" onClick={handleClick}>
          <h1 className="skew-x-[30deg] font-bold italic text-2xl">Jízdy</h1>
          </div>
      </div>
    </div>
    
    <div ref={ref} className="h-screen bg-light">
      <div className="flex h-full flex-col justify-evenly items-center">      
        <h1 className="font-mono font-bold text-dark text-5xl">
          {route === "north" ? "Severní trasa" : "Jižní trasa"}
        </h1>
        
      <p className="w-[60vw] text-dark text-xl text-center">{route === "north" ? NorthRouteText : SourthRouteText}</p>

        <div className="flex border w-[200px] skew-x-[-30deg]">
        <div className={"flex w-[100px] font-bold justify-center " + (route === "north" ? "bg-dark text-light" : "bg-light text-dark")}
        onClick={() => {
          setRoute("north")
          setChosenPoint(0)
          }}>
          <p className="skew-x-[30deg]">Severní</p>
        </div>
      <div className={"flex w-[100px] font-bold justify-center " + (route === "south" ? "bg-dark text-light" : "bg-light text-dark hover:bg-dark hover:text-light")}
        onClick={() => {
          setRoute("south")
          setChosenPoint(0)
          }}>
          <p className="skew-x-[30deg]">Jižní</p>
        </div>
        </div>
          <div className="flex justify-between w-[80vw]">
            {route === "north" ? north : south}
          </div>
        <div className="h-[20vh] w-[60vw] flex flex-col items-center">
          <h1 className="w-[70%] h-[30%] border-b-4 border-dark text-dark text-center font-bold text-3xl">{route === "north" ? NorthPoints[chosenPoint].name : SouthPoints[chosenPoint].name}</h1>
          <p className="w-[70%] h-[70%] text-xl">{route === "north" ? NorthPoints[chosenPoint].description : SouthPoints[chosenPoint].description}</p>
        </div>
      </div>
    </div>
    </MyContext.Provider>
  );
}

export default App;
