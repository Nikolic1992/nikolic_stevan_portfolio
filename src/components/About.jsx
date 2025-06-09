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
  HTML: (
    <FaHtml5 className="text-orange-500 text-[1.125rem] md:text-[1.5rem]" />
  ),
  CSS: <FaCss3Alt className="text-blue-500 text-[1.125rem] md:text-[1.5rem]" />,
  Tailwind: (
    <SiTailwindcss className="text-cyan-400 text-[1.125rem] md:text-[1.5rem]" />
  ),
  "Material UI": (
    <SiMui className="text-blue-300 text-[1.125rem] md:text-[1.5rem]" />
  ),
  Bootstrap: (
    <FaBootstrap className="text-purple-500 text-[1.125rem] md:text-[1.5rem]" />
  ),
  SASS: <FaSass className="text-pink-400 text-[1.125rem] md:text-[1.5rem]" />,
  JavaScript: (
    <SiJavascript className="text-yellow-400 text-[1.125rem] md:text-[1.5rem]" />
  ),
  TypeScript: (
    <SiTypescript className="text-blue-500 text-[1.125rem] md:text-[1.5rem]" />
  ),
  React: (
    <FaReact className="text-cyan-300  text-[1.125rem] md:text-[1.5rem]" />
  ),
  Redux: (
    <SiRedux className="text-purple-400 text-[1.125rem] md:text-[1.5rem]" />
  ),
  "Node.js": (
    <FaNodeJs className="text-green-600 text-[1.125rem] md:text-[1.5rem]" />
  ),
  "Express.js": (
    <SiExpress className="text-gray-400 text-[1.125rem] md:text-[1.5rem]" />
  ),
  Firebase: (
    <SiFirebase className="text-yellow-500 text-[1.125rem] md:text-[1.5rem]" />
  ),
  axios: <SiAxios className="text-sky-400 text-[1.125rem] md:text-[1.5rem]" />,
};

function About() {
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-[1rem] md:p-[2rem] lg:p-[3rem] bg-[url('/assets/background.jpg')] bg-cover bg-center">
      <div
        className="flex flex-col justify-center items-center text-center w-full max-w-[1200px] md:max-w-[1200px] p-[3rem] 
        bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.6)] rounded-lg"
      >
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] uppercase font-bold mb-6 md:mb-9 lg:mb-12 text-center text-[#fff]">
          About Me
        </h2>
        <h4 className="text-[#fff] text-[1.1rem] md:text-[1.25rem] lg:text-[1.5rem]">
          My name is <b>Stevan</b>, a dedicated <b>Full Stack Web Developer</b>{" "}
          based in Sydney, Australia. My approach to programming is driven by
          curiosity, but sustained by a strong commitment to quality and
          precision. What began as simple experimentation quickly grew into a
          disciplined practice where every line of code matters. I take pride in
          crafting clean, efficient, and well-structured solutions, paying close
          attention to detail to ensure that each project is not only functional
          but also reliable and visually polished. For me, there is great
          satisfaction in transforming a blank screen into a seamless and
          impactful user experience.
        </h4>
        <div className="mt-12 flex flex-col gap-16 lg:flex-row text-left w-full">
          <div className="flex-1 space-y-6">
            <h2 className="text-[1.25rem] font-semibold text-gray-400 text-center">
              A little bit about why programming:
            </h2>
            <h3 className="text-[#fff] text-[1.1rem] md:text-[1.25rem] lg:text-[1.5rem] text-center">
              I am genuinely fascinated by the entire world of programming —
              from understanding how the internet works to seeing its impact in
              fields like medicine and beyond. For me, programming is more than
              just a job; it’s a true passion and a way to explore endless
              possibilities. I love solving problems, building useful tools, and
              constantly pushing my limits to learn new technologies. This deep
              enthusiasm drives me to create meaningful digital experiences that
              can make a difference.
            </h3>
            <button
              onClick={() => smoothScroll("contact")}
              className="contact-btn wiggle-on-hover w-full text-center"
            >
              Contact
            </button>
          </div>
          <div className="flex-1 items-center space-y-6">
            <h2 className="text-[1.25rem] font-semibold text-gray-400 text-center">
              Technologies i use:
            </h2>
            <ul className="grid grid-cols-4 gap-4 justify-items-center">
              {techStackArray.map((tech, index) => (
                <li
                  key={index}
                  title={tech}
                  className="bg-[#333] text-white p-4 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.15)] flex items-center justify-center transition-transform duration-500 hover:scale-130 hover:rotate-[360deg] cursor-pointer"
                  style={{ width: "3.75rem", height: "3.75rem" }}
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
