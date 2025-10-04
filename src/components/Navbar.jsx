import { useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiX, BiDotsVerticalRounded } from "react-icons/bi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-around border-b border-gray-700 bg-black/70 px-6 py-4 text-white backdrop-blur-md md:justify-evenly">

      {/* Logo / Brand */}
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-2xl md:text-3xl font-semibold transition-all duration-300 hover:opacity-100 italic"
      >
        Saumya Srivastava
      </a>

      {/* Desktop Nav Links */}
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

      {/* Desktop Social Icons */}
      <ul className="hidden md:flex gap-10">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-600 hover:opacity-100">
          <a
            href="https://www.linkedin.com/in/saumya-srivastavaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-600 hover:opacity-100">
          <a
            href="https://github.com/Saumya-Sri21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      {isOpen ? (
        <BiX className="block md:hidden text-3xl" onClick={menuOpen} />
      ) : (
        <BiDotsVerticalRounded className="block md:hidden text-3xl" onClick={menuOpen} />
      )}

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute right-4 top-[72px] w-48 flex flex-col items-start gap-6 border border-gray-700 bg-black/90 p-6 rounded-lg shadow-lg ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {/* Mobile Links */}
          <ul className="flex flex-col gap-4">
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

          {/* Mobile Social Icons */}
          <ul className="flex gap-5">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-600 hover:opacity-100">
              <a
                href="https://www.linkedin.com/in/saumya-srivastavaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-600 hover:opacity-100">
              <a
                href="https://github.com/Saumya-Sri21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
