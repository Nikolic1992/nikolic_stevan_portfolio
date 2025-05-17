import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[radial-gradient(circle,_#2a2a2a,_#1f1f1f,_#000000)]   text-gray-400 py-6 text-center">
      <div className="flex flex-col items-center justify-center gap-[10px] uppercase">
        <div>Connect with me</div>
        <div className="flex items-center justify-center gap-[10px]">
          <a
            href="https://github.com/Nikolic1992"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/nikolic1992/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
      <p className="py-[10px]">
        &copy; {new Date().getFullYear()} Stevan Nikolic. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
