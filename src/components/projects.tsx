import { useState } from "react";
import gamestoreImg from "../assets/Screenshot (1).png";
import tourUgImg from "../assets/Screenshot (2).png";
import realestate from "../assets/Screenshot (10).png";
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
    highlight: "E-commerce website for video games ",
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
    highlight: "Tourism website for Uganda ",
    shadow: "shadow-green-600",
    description:
      "Tour Uganda was born from my profound love for my country. I truly believe Uganda is the Pearl of Africa, and I wanted to share its beauty with everyone who can access the web. On Tour Uganda, users can discover tourism sites, check out available tour packages, and get in touch with tour agents. Using my MERN stack skills, I built both the frontend and backend of the platform.",
  },
  {
    title: "Finders",
    tools: [
      "Socket.io",
      "React",
      "Tailwind css",
      "Typescript",
      "Redux",
      "Express js",
      "Mongo DB",
    ],
    url: "https://finders.vercel.app/",
    img: realestate,
    highlight: "Website for Missing people ",
    shadow: "shadow-white",
    description:
      "I created this website because my friend went missing once, and it was really tough. I wanted to help others who are searching for their missing loved ones. So, I created Finders to assist people in finding their missing loved ones. Users can use features like a community chat room to share information and support. The platform lets users post details about missing individuals, turning the search into a team effort.",
  },
];

export const Projects = () => {
  const [open, setOpen] = useState("");
  return (
    <>
      <div className=' h-fit py-10 bg-black text-white w-screen overflow-hidden'>
        <div className='  text-2xl  ml-2 my-4 p-4 font-medium'>My Work</div>

        <div className='md:grid md:grid-cols-3 md:justify-items-center md:gap-4  flex flex-col justify-center items-center'>
          {work.map((item) => (
            <div
              className='m-3 relative text-white w-[300px] md:w-[333px] h-fit bg-white rounded-md '
              key={item.url}
              onClick={() => setOpen(item.title)}
            >
              {open == item.title && (
                <div className='w-[100%] h-[100%] p-1 rounded-md absolute flex flex-col space-y-3 bg-gray-900 font-medium text-gray-300  top-0 z-10'>
                  <div className='text-sm'>{item.description}</div>
                  <a
                    href={item.url}
                    className='text-center text-white w-fit h-fit p-2 rounded-md bg-rose-600'
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
