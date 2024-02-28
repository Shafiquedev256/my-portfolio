import {useState} from "react"

export const Projects = ()=>{
  const [openGame,setOpenGame] = useState(false) 
const [openGym,setOpenGym] = useState(false)  

  return (
    <> 
    <div className="relative m-2"> 

      <div className="font-light text-2xl ml-2 my-3">Projects</div> 
      <div className="md:grid md:grid-cols-3">
      <div className="m-3">
      <div className="font-bold border-0 border-b-[2px] border-gradient w-fit" onClick={()=>{setOpenGame(!openGame)}}> Game store </div> 
      <div className="w-72 text-sm space-y-2 border-[2px] text-gray-600 border-gradient  p-2   my-2"> 
      <p>
      I built a game store website fueled by my passion for video games. Using React, Tailwind CSS, Typescript, and Redux for the frontend, and Express.js, Node.js, and MongoDB for the backend (powered by the MERN stack), I crafted an API to seamlessly integrate games and trailers into the platform. This venture was inspired by my desire to make game buying simpler, leveraging my love for the MERN stack to create a tailored solution.</p> 
     <a href="https://games-store-sandy.vercel.app/"> <div  className=" border-0 p-2  bg-[#f6b7] text-white font-bold text-sm rounded w-fit">live site</div></a>
      </div>
      </div> 
      
      <div className="m-3">
      <div className="font-bold border-0 border-b-[2px] border-gradient w-fit" onClick={()=>{setOpenGym(!openGym)}}>Gym Daddy</div>  <div className="w-72 text-sm space-y-2 border-[2px] border-gradient  p-2   my-2"> 
      <p>
      I created Gym Daddy with the goal of assisting individuals in meticulously planning their workouts before setting foot in the gym. Recognizing the challenges my father faced in tracking progress and rep increments during his gym sessions, I addressed this concern by employing a tech stack that includes React, Tailwind CSS, Redux, TypeScript, MongoDB, and Express. The platform is designed to cater to both mobile and desktop users, prioritizing a mobile-first approach for enhanced accessibility on smartphones.
      </p> 
     <a href="https://gym-daddy.vercel.app/"> <div  className=" border-0 p-2  bg-[#f6b7] text-white font-bold text-sm rounded w-fit">live site</div></a>
      </div>
      </div> 
      
      
      
      <div className="m-3">
      <div className="font-bold border-0 border-b-[2px] border-gradient w-fit" onClick={()=>{setOpenGame(!openGame)}}>AI Doctor</div> 
      <div className="w-72 text-sm space-y-2 border-[2px] border-gradient  p-2   my-2"> 
      <p>I developed a Doctor Simulator chatbot with the aim of providing accessible health advice and creating a platform for users to engage in AI-driven conversations about their well-being. This innovative chatbot offers a convenient avenue for individuals to seek health-related information at any time. Users can discuss their health concerns, receive advice, and engage in informative dialogues, fostering a proactive approach to healthcare. I archived this with React, Tailwindcss,Typescript , Nodejs,Express,MongoDB,and Openai</p> 
     <a href="https://react-openai-doctor.vercel.app/"> <div  className=" border-0 p-2  bg-[#f6b7] text-white font-bold text-sm rounded w-fit">live site</div></a>
      </div>
      </div> 
    
      </div>
      </div>
    </>
    )
}