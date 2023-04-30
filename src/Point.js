import React, {useContext, useState, useEffect} from 'react'
import { MyContext } from "./MyContext";
export default function Point(props) {
    const {chosenPoint, setChosenPoint} = useContext(MyContext)
    const [border, setBorder] = useState("")
    const [hidden, setHidden] = useState("")
    useEffect(() => {
        if(chosenPoint === props.number) setBorder("[#FDCE00]")
        else if(chosenPoint < props.number) setBorder("dark")
        else setBorder("[#BC6C25]")
    }, [chosenPoint])
  return (
    <div className='flex flex-col w-[300px] items-center' onClick={() => setChosenPoint(props.number)}>
    <div className={'rounded-full h-[80px] w-[80px] border-8 border-' + border}></div>
    <h2 className={'font-mono text-center font-bold text-3xl text-' + border}>{props.name}</h2>
    </div>
  )
}
