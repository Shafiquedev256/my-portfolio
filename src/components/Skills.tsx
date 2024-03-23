export const Skills = () => {
  return (
    <>
      <div className='mx-2 relative h-fit md:flex md:flex-row md:w-[90%]  md:justify-evenly mf:items-center md:ml-10'>
        <div>
          <div className='font-light text-2xl  my-3 pl-2'>Skills</div>
          <ul className='space-y-1 p-3'>
            <li>Communication</li>
            <li>Quick learning</li>
            <li>Self driven</li>
            <li>Team player</li>
            <li>Frontend development</li>
            <li>Backend development</li>
          </ul>
        </div>
        {/*the line below creates that semi-border with rounded corners */}
        <div className='w-[50%] h-[50%] absolute p-3  bottom-0 left-0 border-0  border-b-2  border-b-[#f6b7] -tr-2xl  rounded-bl-2xl   border-l-2 border-l-[#dadbf1]'></div>

        <div className='w-[50%] h-[50%] absolute p-3  top-0 right-0 border-0  border-t-2  border-r-[#f6b7]   rounded-tr-2xl   border-r-2 border-t-[#dadbf1]'></div>

        <div>
          <div className='font-light text-2xl  my-3 pl-3'>Tools</div>
          <ul className='space-y-1 p-3'>
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
