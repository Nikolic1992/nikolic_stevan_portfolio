const techStackArray = [
  "HTML",
  "CSS",
  "Tailwind",
  "Material UI",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Node.js",
  "Express.js",
  "Firebase",
  "axios",
];

function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[radial-gradient(circle,_#ffffff,_#e0e0e0,_#c0c0c0)]">
      <div className="flex flex-col justify-center items-center text-center w-full max-w-[1200px] p-[2rem] shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold mb-6 md:mb-9 lg:mb-12 text-center text-gray-900">
          About Me
        </h2>
        <h4 className="text-gray-900 text-xl md:text-2xl lg:text-3xl">
          My name is <b>Stevan Nikolic</b>, Web Developer based in Sydney,
          Australia. Outside of coding, I enjoy football, darts, board games,
          video games, and spending time with friends.
          <br /> These hobbies keep me balanced and inspired.
        </h4>
        <div className="mt-12 flex flex-col gap-16 lg:flex-row text-left w-full">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              A little bit about why programming:
            </h2>
            <h3 className="text-gray-600 text-xl text-center">
              I am genuinely fascinated by the entire world of programming —
              from understanding how the internet works to seeing its impact in
              fields like medicine and beyond. For me, programming is more than
              just a job; it’s a true passion and a way to explore endless
              possibilities. I love solving problems, building useful tools, and
              constantly pushing my limits to learn new technologies. This deep
              enthusiasm drives me to create meaningful digital experiences that
              can make a difference.
            </h3>
            <a href="#contact" className="hero-link wiggle-on-hover">
              Contact
            </a>
          </div>
          <div className="flex-1 items-center space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              My Skills
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-white font-medium">
              {techStackArray.map((tech, index) => (
                <li
                  key={index}
                  className="bg-[#333] text-white uppercase 
                             py-3 rounded-lg text-center shadow-[0_5px_15px_rgba(0,0,0,0.15)]"
                  style={{ minWidth: "120px" }}
                >
                  {tech}
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
