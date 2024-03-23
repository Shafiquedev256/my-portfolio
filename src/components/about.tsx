import ShafiqImg from "../assets/149778835.png";

export const About = () => {
  return (
    <>
      <div className='font-light text-2xl ml-2 my-3'>About Me</div>
      <div className='md:flex md:flex-row border-gradient border-0 border-l-8 ml-2'>
        <div className='  text-gray-900  pl-4 m-2 space-y-2'>
          <p>
            I developed an interest in programming while searching for a way to
            express who I am and what I believe in. My passion lies in crafting
            solutions that not only address personal challenges but also have a
            positive impact on the world. I strive to create avenues for
            everyone to access high-quality products and services from dedicated
            providers.
          </p>

          <p>
            Embarking on the MERN stack learning journey, I held a firm belief
            that the websites I build could transform the lives of like-minded
            individuals who share my beliefs.
          </p>

          <p>
            Fuelled by Reactjs, Tailwindcss,Typescript, Nodejs, MongoDB,
            Express, Redux, and a continuous learning mentality, I am dedicated
            to crafting seamless user experiences and websites that
            authentically represent the beliefs and values of my clients.
          </p>
        </div>
        <img
          src={ShafiqImg}
          alt='Shafiq image'
          className='rounded-b-2xl w-[300px] m-2'
        />
      </div>
    </>
  );
};
