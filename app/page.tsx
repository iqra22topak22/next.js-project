"use client"

import { useState } from "react";


export default function Home() {

  const [count,setCount]= useState(0)

   const handleIncrement=()=>{
    if (count  < 10){
      setCount(count +1)
    }
   }

   const handleDecrement=()=>{
    if(count >0){
      setCount(count - 1)
    }
   }



  return (

    <div className="flex justify-center items-center mt-[50px]  rounded-sm">
    <div className="w-80 h-[400px] bg-blue-400 border-[5px]  ">


    <h1 className="text-center font-extrabold mt-6 text-purple-700">COUNTTIMMER</h1>

      <p className=" ml-20 mt-10">your page count is {count}</p>
      <br />
      <br />
      <button onClick={handleIncrement} className="ml-14 bg-black text-white w-48 h-10  rounded-lg  hover:bg-purple-500">handleIncrement</button>

      <br /><br />
      <br />

      <br />
      <button onClick={handleDecrement} className="ml-14 bg-black text-white w-48 h-10 rounded-lg hover:bg-purple-500">handleDecrement</button>
    </div>
    </div>
   
  );
}
