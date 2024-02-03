import {useState} from "react"

export const Projects = ()=>{
  const [openGame,setOpenGame] = useState(false)
  return (
    <> 
    <div className="relative m-2"> 

      <div className="font-light text-2xl ml-2 my-3">Projects</div> 
      
      <div className="m-3">
      <div className="font-bold border-0 border-b-[2px] border-gradient w-fit" onClick={()=>{setOpenGame(!openGame)}}> Game store </div> 
      {
        openGame&&(  <div className="w-72 text-sm space-y-2 border-[2px] border-gradient  p-2   my-2"> 
      <p>
      I built a game store website fueled by my passion for video games. Using React, Tailwind CSS, Typescript, and Redux for the frontend, and Express.js, Node.js, and MongoDB for the backend (powered by the MERN stack), I crafted an API to seamlessly integrate games and trailers into the platform. This venture was inspired by my desire to make game buying simpler, leveraging my love for the MERN stack to create a tailored solution.</p> 
     <a href="https://games-store-sandy.vercel.app/"> <div  className=" border-0 p-2  bg-[#f6b7] text-white font-bold text-sm rounded w-fit">live site</div></a>
      </div>)
      }
      </div> 
      
      <div className="m-3">
      <div className="font-bold border-0 border-b-[2px] border-gradient w-fit" onClick={()=>{setOpenGame(!openGame)}}>Your Real Estate</div> 
      {
        openGame&&(  <div className="w-72 text-sm space-y-2 border-[2px] border-gradient  p-2   my-2"> 
      <p>
      I built a game store website fueled by my passion for video games. Using React, Tailwind CSS, Typescript, and Redux for the frontend, and Express.js, Node.js, and MongoDB for the backend (powered by the MERN stack), I crafted an API to seamlessly integrate games and trailers into the platform. This venture was inspired by my desire to make game buying simpler, leveraging my love for the MERN stack to create a tailored solution.</p> 
     <a href="https://games-store-sandy.vercel.app/"> <div  className=" border-0 p-2  bg-[#f6b7] text-white font-bold text-sm rounded w-fit">live site</div></a>
      </div>)
      }
      </div> 
      
      
      <div className="m-3">
      <div className="font-bold border-0 border-b-[2px] border-gradient w-fit" onClick={()=>{setOpenGame(!openGame)}}> Gym Daddy </div> 
      {
        openGame&&(  <div className="w-72 text-sm space-y-2 border-[2px] border-gradient  p-2   my-2"> 
      <p>
      I built a game store website fueled by my passion for video games. Using React, Tailwind CSS, Typescript, and Redux for the frontend, and Express.js, Node.js, and MongoDB for the backend (powered by the MERN stack), I crafted an API to seamlessly integrate games and trailers into the platform. This venture was inspired by my desire to make game buying simpler, leveraging my love for the MERN stack to create a tailored solution.</p> 
     <a href="https://games-store-sandy.vercel.app/"> <div  className=" border-0 p-2  bg-[#f6b7] text-white font-bold text-sm rounded w-fit">live site</div></a>
      </div>)
      }
      </div> 
      
      
      <div className="m-3">
      <div className="font-bold border-0 border-b-[2px] border-gradient w-fit" onClick={()=>{setOpenGame(!openGame)}}>Tailwind components</div> 
      {
        openGame&&(  <div className="w-72 text-sm space-y-2 border-[2px] border-gradient  p-2   my-2"> 
      <p>
      I built a game store website fueled by my passion for video games. Using React, Tailwind CSS, Typescript, and Redux for the frontend, and Express.js, Node.js, and MongoDB for the backend (powered by the MERN stack), I crafted an API to seamlessly integrate games and trailers into the platform. This venture was inspired by my desire to make game buying simpler, leveraging my love for the MERN stack to create a tailored solution.</p> 
     <a href="https://games-store-sandy.vercel.app/"> <div  className=" border-0 p-2  bg-[#f6b7] text-white font-bold text-sm rounded w-fit">live site</div></a>
      </div>)
      }
      </div> 
      
      </div>
    </>
    )
}