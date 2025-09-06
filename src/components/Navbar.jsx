
import { useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiMenu, BiX } from "react-icons/bi";

function Navbar() {
   const [isOpen, setIsOpen] = useState(false)
   const menuOpen=()=>{
         setIsOpen(!isOpen)
   }

  return (
    
    <nav className="fixed top-0 z-10 flex w-full items-center justify-around border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">

      {/*  Logo / Brand Name    */}
      <a href="#home"  className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100 italic">Saumya Srivastava</a>
    {/* Navigation links for desktop */}

      <ul className="hidden md:flex gap-10">
        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Home</li>
        </a>
        <a href="#skills" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Skills</li>
        </a>
        <a href="#experience" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Experience</li>
        </a>
        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Projects</li>
        </a>
        <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Contact</li>
        </a>
      </ul>
{/* Social icons linking to external profiles */}
     <ul className="hidden md:flex gap-10">
  <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-600 hover:opacity-100">
    <a href="https://www.linkedin.com/in/saumya-srivastavaa" target="_blank" rel="noopener noreferrer">
      <BsLinkedin />
    </a>
  </li>
  <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-600 hover:opacity-100">
    <a href="https://github.com/Saumya-Sri21" target="_blank" rel="noopener noreferrer">
      <BsGithub />
    </a>
  </li>
</ul>


   {
       isOpen  ? (
         <BiX   className="block md:hidden text-4xl" onClick={menuOpen}/>
       ):(
   <BiMenu  className="block md:hidden text-4xl" onClick={menuOpen}/>
       )
   }

   {
       isOpen && (
          <div className={`fixed  right-0  top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${isOpen ? "block":"hidden"}`}>
      {/* Navigation links for mobile/small devices */}
     <ul className="flex flex-col gap-8">
        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Home</li>
        </a>
        <a href="#skills" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Skills</li>
        </a>
        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Projects</li>
        </a>
        <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Contact</li>
        </a>
      </ul>
  {/* Social icons linking to external profiles */}
     <ul className="flex flex-wrap gap-5">
  <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-600 hover:opacity-100">
    <a href="https://www.linkedin.com/in/saumya-srivastavaa" target="_blank" rel="noopener noreferrer">
      <BsLinkedin />
    </a>
  </li>
  <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-600 hover:opacity-100">
    <a href="https://github.com/Saumya-Sri21" target="_blank" rel="noopener noreferrer">
      <BsGithub />
    </a>
  </li>
</ul>

          </div>
       )
   }
    </nav> 
  )
}

export default Navbar