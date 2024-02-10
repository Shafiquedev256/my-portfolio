import shakeHand from "../assets/silhouette-shaking-hands-3186564.png" 

export const HireMe = ()=>{
  
  return (
    <>
    <div className="m-2"> 
    <div className="font-light text-2xl ml-2 my-3">Why hire me?</div>
    <div className="md:flex md:flex-row md:items-center">
    <img src={shakeHand} className="w-52 "/>
    <div>
As an innovative problem solver, I leverage my expertise in web programming to craft intelligent and creative solutions tailored to meet your specific challenges. With a keen eye for detail and a passion for staying ahead of industry trends, I ensure that my solutions not only address your current needs but also anticipate future demands. By combining technical prowess with a deep understanding of client objectives, I deliver results that exceed expectations and drive success. Hiring me means gaining a dedicated partner committed to transforming obstacles into opportunities through innovative thinking and effective web programming skills.
    </div>
    </div>
    </div>
    </>
    )
}
