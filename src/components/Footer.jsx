import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[radial-gradient(circle,_#2a2a2a,_#1f1f1f,_#000000)]   text-gray-400 py-3 md:py-10 text-center">
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
