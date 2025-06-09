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
      setMenuOpen(false); // Close menu
    }
  };

  const handleLogoClick = () => {
    navigate("/", { state: { scrollTo: "home" } });
    smoothScroll("home");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md">
      <div className="relative flex justify-between items-center px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 md:py-6 lg:py-8">
        <div
          onClick={handleLogoClick}
          className="w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer"
        >
          <img
            src="./assets/logo.png"
            alt="SN technology logo"
            className="w-[50px] h-[50px] lg:w-[75px] lg:h-[75px] rounded-full absolute z-50 bg-white/20 backdrop-blur-md border border-white/30 shadow-md lg:ml-10"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 sm:gap-6 md:gap-[2rem] font-semibold">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
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
        <ul className="md:hidden flex flex-col items-end gap-[0.3125rem] py-4 px-4 bg-white/10 backdrop-blur-md border-t border-white/20 font-semibold text-[1.1rem] shadow-md">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
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
