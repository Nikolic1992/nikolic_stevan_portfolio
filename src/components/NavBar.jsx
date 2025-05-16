function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f3f3f3] shadow-md z-50">
      <div className="flex justify-between items-center px-[6rem] py-[2rem]">
        <div className="font-bold text-3xl cursor-pointer">LOGO</div>
        <ul className="flex text-gray-700 font-semibold gap-[2rem]">
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
