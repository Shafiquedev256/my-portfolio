const work = [
  {
    title: "Game store",
    description:
      "The primary objective was to establish an online platform for convenient access to video games at affordable rates. Crafting an API facilitated the seamless integration of games and trailers. While I didn't originate the concept, I ensured its realization using my skills. It's factual that I didn't invent anything; however, I proudly brought my younger brother's idea to fruition, infusing it with creativity and technical expertise.",
    tools: [
      "React",
      "Tailwind css",
      "Typescript",
      "Redux",
      "Express js",
      "Mongo DB",
    ],
    url: "https://games-store-sandy.vercel.app/",
  },
  {
    title: "Doctor simulator (AI Chatbot)",
    description:
      "In my endeavor to contribute to accessible health guidance and facilitate meaningful discussions surrounding personal well-being, I embarked on the creation of a platform. This platform serves as a conduit for individuals seeking easily accessible health advice and engaging in AI-driven conversations pertinent to their holistic wellness. Leveraging my proficiency in the MERN stack alongside adept utilization of OpenAI capabilities, I meticulously crafted this innovative project. While it's important to note that the conceptualization of this endeavor wasn't mine, I took the initiative to bring it to fruition, employing my technical prowess to translate the vision into reality.",

    tools: [
      "React",
      "Tailwind css",
      "Typescript",
      "OpenAI",
      "Express js",
      "Mongo DB",
    ],
    url: "https://react-openai-doctor.vercel.app/",
  },
  {
    title: "Real estate ",
    description:
      "The primary goal behind this project was to develop a real estate website allowing users to search for their desired houses and easily contact the seller or company agent. This visionary concept was conceived by Bob, a seasoned real estate agent, who recognized the need for a seamless platform to connect buyers with their dream homes. ",
    tools: ["React", "Tailwind css", "Typescript"],
    url: "https://demoproperties.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <>
      <div className='relative m-2'>
        <div className='font-light text-2xl ml-2 my-3'>Projects</div>
        <div className='md:grid md:grid-cols-3 md:justify-items-center'>
          {work.map((item) => (
            <div className='m-3'>
              <div className='font-bold border-0 border-b-[2px] border-gradient w-fit'>
                {item.title}
              </div>
              <div className='w-72 text-sm space-y-2 border-[2px] border-gradient  p-2   my-2'>
                <p>{item.description}</p>
                <a href={item.url}>
                  {" "}
                  <div className=' border-0 p-2  bg-[#f6b7] text-white font-bold text-sm rounded w-fit'>
                    live site
                  </div>
                </a>
                <div className='grid grid-cols-3'>
                  {item.tools.map((tool) => (
                    <div className='w-fit p-1 text-center rounded-full m-1 bg-blue-100 text-sm '>
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
