import shakeHand from "../assets/silhouette-shaking-hands-3186564.png" 

export const HireMe = ()=>{
  
  return (
    <>
    <div className="m-2"> 
    <div className="font-light text-2xl ml-2 my-3">Why hire me?</div>
    <div className="flex md:flex-row justify-center flex-col md:justify-evenly items-center">
    <img src={shakeHand} className="w-52 "/>
    <div>
  1. I am a full stack developer.<br/>
  2. I focus on one project at a time. <br/>
  3. I am able to learn new technologies in order to deliver high quality work. <br/>
  4. I am self driven . <br/>
  5. I will work at least 8 hours everyday (guaranteed). <br/>
  6. I belive in effective communication.
    </div>
    </div>
    </div>
    </>
    )
}
