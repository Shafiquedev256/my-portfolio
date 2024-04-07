import { useState } from "react";
import gamestoreImg from "../assets/Screenshot (1).png";
import tourUgImg from "../assets/Screenshot (2).png";
import realestate from "../assets/Screenshot (3).png";
const work = [
  {
    title: "Game store",
    tools: [
      "React",
      "Tailwind css",
      "Typescript",
      "Redux",
      "Express js",
      "Mongo DB",
    ],
    url: "https://games-store-sandy.vercel.app/",
    img: gamestoreImg,
    highlight: "Mern stack  e-commerce website for video games ",
    shadow: "shadow-red-600",
    description:
      "The game store was created to facilitate access to premium video games for enthusiasts worldwide. It allows users to easily browse, search, view game details, watch trailers, add games to their cart, and checkout desired items. Leveraging my Node.js and MERN stack expertise, I designed both the backend and frontend components of the platform.",
  },
  {
    title: "Tour Uganda",
    tools: [
      "React",
      "Tailwind css",
      "Typescript",
      "Redux",
      "Express js",
      "Mongo DB",
    ],
    url: "https://tour-ug.vercel.app/",
    img: tourUgImg,
    highlight: "Mern stack  tourism website for Uganda ",
    shadow: "shadow-green-600",
    description:
      "Tiour Uganda was created out of my deep love for my country. I wholeheartedly believe that Uganda is the Pearl of Africa, and I wanted to provide an opportunity for everyone with web access to discover its beauty. On Tiour Uganda, users can explore tourism sites, browse available tour packages, and find contact details for tour agents. Leveraging my MERN stack skills, I developed both the frontend and backend of the platform.",
  },
  {
    title: "Demo estate",
    tools: ["React", "Tailwind css", "Typescript", "Redux"],
    url: "https://demoproperties.vercel.app/",
    img: realestate,
    highlight: "Frontend of a real estate listing website ",
    shadow: "shadow-white",
    description:
      "This platform is designed with passion to showcase the finest properties, making your search for your dream home effortless. Our aim is to assist real estate agencies in listing their properties and displaying their contact information. Users can explore listings, enjoy detailed descriptions, and view high-quality images.",
  },
];

export const Projects = () => {
  const [open, setOpen] = useState("");
  return (
    <>
      <div className=' h-fit py-10 bg-black text-white w-screen overflow-hidden'>
        <div className='  text-4xl  ml-2 my-4 p-4 font-medium'>My Work</div>

        <div className='md:grid md:grid-cols-3 md:justify-items-center md:gap-4  flex flex-col justify-center items-center'>
          {work.map((item) => (
            <div
              className='m-3 relative text-white w-[333px] md:w-[400px] h-fit bg-white rounded-md '
              key={item.url}
              onClick={() => setOpen(item.title)}
            >
              {open == item.title && (
                <div className='w-[100%] h-[100%] rounded-md absolute flex flex-col justify-between bg-gray-900 font-medium text-gray-300 p-2 top-0 z-10'>
                  <div>{item.description}</div>
                  <a
                    href={item.url}
                    className='text-center text-white w-fit h-fit p-3 rounded-md bg-rose-600'
                  >
                    Live demo
                  </a>
                </div>
              )}
              <div className='bg-black bg-opacity-95 text-gray-300 font-medium rounded-md'>
                <img src={item.img} alt='' className='rounded-t-md w-[100%]' />
                <div className={`p-3 shadow-sm rounded-b-md ${item.shadow} `}>
                  <div className='text-2xl w-fit'>{item.title}</div>
                  <p>{item.highlight}</p>
                  <div className='grid grid-cols-3 text-sm my-2 '>
                    {item.tools.map((tool) => (
                      <span>{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
