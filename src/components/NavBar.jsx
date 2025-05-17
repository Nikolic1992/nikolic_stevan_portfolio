import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f3f3f3] shadow-md z-50">
      <div className="flex justify-between items-center px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 md:py-6 lg:py-8">
        <div className="font-bold text-3xl cursor-pointer">LOGO</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 sm:gap-6 md:gap-[2rem] text-gray-700 font-semibold">
          <li>
            <a href="#home" className="navbar-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="navbar-link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="navbar-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <IoMdClose
              size={30}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          ) : (
            <RxHamburgerMenu
              size={30}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-end gap-2 pr-4 py-4 bg-[#f3f3f3] text-gray-700 font-semibold text-lg">
          <li>
            <a href="#home" className="navbar-link" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="navbar-link" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="navbar-link" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="navbar-link last:border-b-0"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
