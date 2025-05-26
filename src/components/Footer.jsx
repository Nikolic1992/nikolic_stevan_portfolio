import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white via-gray-100 to-gray-300 shadow-lg text-gray-800 py-6 md:py-10 text-center">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-[1.1rem] md:text-[1.25rem] lg:text-[1.5rem] font-semibold tracking-wide uppercase">
          Let’s connect
        </h2>
        <div className="flex gap-6">
          <a
            href="https://github.com/Nikolic1992"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 text-gray-700 hover:text-black"
          >
            <FaGithub size={36} />
          </a>
          <a
            href="https://www.linkedin.com/in/nikolic1992/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 text-gray-700 hover:text-black"
          >
            <FaLinkedin size={36} />
          </a>
        </div>
      </div>
      <p className="mt-6 text-[0.95rem] text-gray-600">
        &copy; {new Date().getFullYear()} Stevan Nikolic. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
