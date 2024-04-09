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
            <li>React js</li>
            <li>Tailwind css</li>
            <li>Redux</li>
            <li>Express js</li>
            <li>Mongo dB</li>
            <li>Node js</li>
          </ul>
        </div>
      </div>
    </>
  );
};
