import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu if open
    }
  };

  // Scroll to the #home section ( HERO )
  const handleLogoClick = () => {
    navigate("/", { state: { scrollTo: "home" } });
    smoothScroll("home");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[radial-gradient(circle,_#ffffff,_#e0e0e0,_#c0c0c0)] shadow-[0_0_10px_rgba(0,0,0,0.5)] z-50 ">
      <div className="relative flex justify-between items-center px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 md:py-6 lg:py-8">
        <div
          onClick={handleLogoClick}
          className="w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer "
        >
          <img
            src="./assets/logo.png"
            alt="SN technology logo"
            className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full absolute z-50 bg-[radial-gradient (circle,_#ffffff,_#e0e0e0,_#c0c0c0)] shadow-[0_0_10px_rgba(0,0,0,0.5)] ml-10"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 sm:gap-6 md:gap-[2rem]  font-semibold">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(section);
                }}
                className="navbar-btn "
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
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
        <ul className="md:hidden flex flex-col items-end gap-[5px] py-2 bg-[radial-gradient(circle,_#ffffff,_#e0e0e0,_#c0c0c0)] font-semibold text-lg">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section} className="px-4">
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(section);
                }}
                className="navbar-btn"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
