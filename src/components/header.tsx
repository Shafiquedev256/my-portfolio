import githubLogo from "../assets/github-142-svgrepo-com.svg"
import linkedinLogo from "../assets/linkedin-svgrepo-com.svg" 
import gmailLogo from "../assets/gmail-svgrepo-com.svg" 
export const Header = ()=>{
  
  return(
    <>
<header className="bg-black text-white py-4 font-sans">
      <div className="container mx-auto flex items-center justify-between pl-3">
        <div className="md:text-3xl font-bold text-2xl text-[#f1f1f1]">Shafiq</div>
        <nav className="space-x-4 flex flex-row items-center mr-2">
       <div><img src={githubLogo}/></div>
       <div><img src={linkedinLogo}/></div>
       <div><img src={gmailLogo}/></div>
        </nav>
      </div>
    </header>
    </>
    )
}