export const Skills = () => {
  return (
    <>
      <div className='mx-2 relative h-fit md:flex md:flex-row md:w-[90%]  md:justify-evenly mf:items-center md:ml-10'>
        <div>
          <div className=' text-2xl  my-3 pl-2 font-medium'>Skills</div>
          <ul className='space-y-1 p-3 font-medium text-sm'>
            <li>Communication</li>
            <li>Quick learning</li>
            <li>Self driven</li>
            <li>Team player</li>
            <li>Frontend development</li>
            <li>Backend development</li>
          </ul>
        </div>
        {/*the line below creates that semi-border with rounded corners */}
        <div className='w-[50%] h-[50%] absolute p-3  bottom-0 left-0 border-0  border-b-4  border-b-[#f6b7] -tr-2xl  rounded-bl-2xl   border-l-4 border-l-[#dadbf1]'></div>

        <div className='w-[50%] h-[50%] absolute p-3  top-0 right-0 border-0  border-t-4  border-r-[#f6b7]   rounded-tr-2xl   border-r-4 border-t-[#dadbf1]'></div>

        <div>
          <div className='text-2xl  my-3 pl-3 font-medium'>Tools</div>
          <ul className='space-y-1 p-3 font-medium text-sm'>
            <div className='flex flex-row space-x-2 items-center'>
              <img
                src='https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=flat'
                alt=''
              />
              <li>React js</li>
            </div>
            <div className='flex flex-row space-x-2 items-center'>
              <img
                src='https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat'
                alt=''
              />
              <li>Tailwind css</li>
            </div>
            <div className='flex flex-row space-x-2 items-center'>
              <img
                src='https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white&style=flat'
                alt=''
              />
              <li>Redux</li>
            </div>
            <div className='flex flex-row space-x-2 items-center'>
              <img
                src='https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white&style=flat'
                alt=''
              />
              <li>Express js</li>
            </div>
            <div className='flex flex-row space-x-2 items-center'>
              <img
                src='https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat'
                alt=''
              />
              <li>Mongo DB</li>
            </div>
            <div className='flex flex-row space-x-2 items-center'>
              <img
                src='https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat'
                alt=''
              />
              <li>Node js</li>
            </div>
            <div className='flex flex-row space-x-2 items-center'>
              <img
                src='https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white&style=flat'
                alt=''
              />
              <li>Git</li>
            </div>
            <div className='flex flex-row space-x-2 items-center'>
              <img
                src='https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white&style=flat'
                alt=''
              />
              <li>Git Hub</li>
            </div>
            <div className='flex flex-row space-x-2 items-center'>
              <img
                src='https://img.shields.io/badge/-Postman-FF6C37?logo=postman&logoColor=white&style=flat'
                alt=''
              />
              <li>Post man</li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
