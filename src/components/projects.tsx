

export const Projects = ()=>{
  
  return (
    <> 
      <div className="font-light text-2xl ml-2 my-3">Projects</div> 
      <div className="m-3">
      <div className="font-bold border-0 border-b-[2px] border-b-purple-600 w-fit"> Game store </div> 
      <div className="w-72 text-sm space-y-2 bg-gray-100 p-2 rounded my-2"> 
      <p>
      I built a game store website fueled by my passion for video games. Using React, Tailwind CSS, Typescript, and Redux for the frontend, and Express.js, Node.js, and MongoDB for the backend (powered by the MERN stack), I crafted an API to seamlessly integrate games and trailers into the platform. This venture was inspired by my desire to make game buying simpler, leveraging my love for the MERN stack to create a tailored solution.</p> 
     <a href="https://games-store-sandy.vercel.app/"> <div  className=" border-0 p-2  bg-blue-100 text-blue-900 font-bold text-sm rounded w-fit">live site</div></a>
      </div>
      </div>
    </>
    )
}