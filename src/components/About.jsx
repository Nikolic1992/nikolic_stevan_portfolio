import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiFirebase,
  SiMui,
  SiAxios,
} from "react-icons/si";

const techStackArray = [
  "HTML",
  "CSS",
  "Tailwind",
  "Material UI",
  "Bootstrap",
  "SASS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Node.js",
  "Express.js",
  "Firebase",
  "axios",
];

const techIcons = {
  HTML: <FaHtml5 className="text-orange-500 text-[18px] md:text-[24px]" />,
  CSS: <FaCss3Alt className="text-blue-500 text-[18px] md:text-[24px]" />,
  Tailwind: (
    <SiTailwindcss className="text-cyan-400 text-[18px] md:text-[24px]" />
  ),
  "Material UI": <SiMui className="text-blue-300 text-[18px] md:text-[24px]" />,
  Bootstrap: (
    <FaBootstrap className="text-purple-500 text-[18px] md:text-[24px]" />
  ),
  SASS: <FaSass className="text-pink-400 text-[18px] md:text-[24px]" />,
  JavaScript: (
    <SiJavascript className="text-yellow-400 text-[18px] md:text-[24px]" />
  ),
  TypeScript: (
    <SiTypescript className="text-blue-500 text-[18px] md:text-[24px]" />
  ),
  React: <FaReact className="text-cyan-300  text-[18px] md:text-[24px]" />,
  Redux: <SiRedux className="text-purple-400 text-[18px] md:text-[24px]" />,
  "Node.js": <FaNodeJs className="text-green-600 text-[18px] md:text-[24px]" />,
  "Express.js": (
    <SiExpress className="text-gray-400 text-[18px] md:text-[24px]" />
  ),
  Firebase: (
    <SiFirebase className="text-yellow-500 text-[18px] md:text-[24px]" />
  ),
  axios: <SiAxios className="text-sky-400 text-[18px] md:text-[24px]" />,
};

function About() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center w-full max-w-[1000px] p-[3rem] bg-[radial-gradient(circle,_#2a2a2a,_#1f1f1f,_#000000)] shadow-[0_0_40px_rgba(0,0,0,0.6)] rounded-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold mb-6 md:mb-9 lg:mb-12 text-center text-[#fff]">
          About Me
        </h2>
        <h4 className="text-[#fff] text-l md:text-xl lg:text-2xl">
          My name is <b>Stevan Nikolic</b>, a Web Developer based in Sydney,
          Australia. I didn't get into programming because of some grand plan —
          I just started building things out of curiosity. One line of code
          turned into ten, ten turned into hours of experimenting, and before I
          knew it, I was hooked. There’s something deeply satisfying about
          turning a blank screen into something real, something that works, and
          maybe even something beautiful.
        </h4>
        <div className="mt-12 flex flex-col gap-16 lg:flex-row text-left w-full">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-400 text-center">
              A little bit about why programming:
            </h2>
            <h3 className="text-[#fff] text-xl text-center">
              I am genuinely fascinated by the entire world of programming —
              from understanding how the internet works to seeing its impact in
              fields like medicine and beyond. For me, programming is more than
              just a job; it’s a true passion and a way to explore endless
              possibilities. I love solving problems, building useful tools, and
              constantly pushing my limits to learn new technologies. This deep
              enthusiasm drives me to create meaningful digital experiences that
              can make a difference.
            </h3>
            <a
              href="#contact"
              className="hero-btn wiggle-on-hover w-full text-center"
            >
              Contact
            </a>
          </div>
          <div className="flex-1 items-center space-y-6">
            <h2 className="text-2xl font-semibold text-gray-400 text-center">
              Technologies:
            </h2>
            <ul className="grid grid-cols-4 gap-4 justify-items-center">
              {techStackArray.map((tech, index) => (
                <li
                  key={index}
                  title={tech}
                  className="bg-[#333] text-white p-4 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.15)] flex items-center justify-center transition-transform duration-500 hover:scale-130 hover:rotate-[360deg] cursor-pointer"
                  style={{ width: "60px", height: "60px" }}
                >
                  {techIcons[tech]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
