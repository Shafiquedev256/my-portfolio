import shakeHand from "../assets/silhouette-shaking-hands-3186564.png";

export const HireMe = () => {
  return (
    <>
      <div className='m-2'>
        <div className='font-light text-2xl ml-2 my-3'>Why hire me?</div>
        <div className='flex md:flex-row justify-center flex-col md:justify-evenly items-center'>
          <img src={shakeHand} className='w-52 ' />
          <div>
            <div className='bg-blue-100 p-2 rounded my-2 text-blue-600 font-bold '>
              I belive in effective communication.
            </div>
            <div className='bg-blue-100 p-2 rounded my-2 text-blue-600 font-bold '>
              I'm proficient in both frontend and backend (MERN stack)
            </div>
            <div className='bg-blue-100 p-2 rounded my-2 text-blue-600 font-bold '>
              I learn new technologies out of my stack in order to deliver high
              quality work.
            </div>
            <div className='bg-blue-100 p-2 rounded my-2 text-blue-600 font-bold '>
              I'm a resourceful problem solver
            </div>
            <div className='bg-blue-100 p-2 rounded my-2 text-blue-600 font-bold '>
              I'm meticulous with details, ensuring error-free code
            </div>
            <div className='bg-blue-100 p-2 rounded my-2 text-blue-600 font-bold '>
              I'm skilled in time management, adept at prioritizing tasks to
              meet project deadlines.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
