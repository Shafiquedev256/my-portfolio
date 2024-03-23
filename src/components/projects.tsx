const work = [
  {
    title: "Game store",
    description:
      "Creating an online place where video game can be easly accessed at affordabl prices was the main goal of innovating this work of art.  I crafted an API to seamlesslyintegrate games and trailers into the platform.IT IS 100% CORRECT I did not invent anything here and IT IS ALSO 100% TRUE I brought my young brother's idea to life",
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
      "With the aim of providing accessible health advice and creating a platform for users toengage in AI-driven conversations about their well-being. AGAIN i didn't invent anything here , I simply used my strong mern stack and openai skill to create this work of art .",

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
