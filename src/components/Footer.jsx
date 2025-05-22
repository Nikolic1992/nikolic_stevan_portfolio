import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-[radial-gradient(circle,_#ffffff,_#e0e0e0,_#c0c0c0)] shadow-[0_0_10px_rgba(0,0,0,0.5)]  text-gray-900 py-3 md:py-10 text-center">
      <div className="flex flex-col items-center justify-center gap-3 uppercase">
        <div className="flex items-center text-xl lg:text-2xl">
          Connect with me
        </div>
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/Nikolic1992"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-130 transition-transform duration-500"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/nikolic1992/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-130 transition-transform duration-500"
          >
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
      <p className="py-2 md:py-4">
        &copy; {new Date().getFullYear()} Stevan Nikolic. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
