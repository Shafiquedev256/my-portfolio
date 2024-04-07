import { TypewriterEffect } from "./typeWriter";

export const Intro = () => {
  return (
    <>
      <div className='bg-black bg-opacity-90 w-screen h-[100vh] font-sans flex flex-col justify-center items-center md:space-y-4'>
        <div className='font-bold text-gray-600 font-sans text-center py-2'>
          WELCOME TO MY WORLD!
        </div>
        <div className='font-bold text-2xl md:text-4xl text-white'>
          Hi, I’m <span className='text-rose-600'> Musinguzi Shafiq</span>
        </div>
        <div className='font-bold text-2xl md:text-4xl text-white flex flex-row space-x-2'>
          <span>a</span> <TypewriterEffect />
        </div>

        <div className='border-0 text-center p-3 w-[98%] text-gray-900 mx-2 md:text-2xl'>
          <h1 className='font-bold'></h1>
        </div>
      </div>
    </>
  );
};
