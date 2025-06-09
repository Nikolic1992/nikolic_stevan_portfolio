// ROUTER
import { Link } from "react-router-dom";
import projectsData from "../data/projectsData";

function Projects() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-30 bg-[url('/assets/projects_background.jpg')] bg-cover bg-center">
      <div
        className="
          flex flex-col justify-center items-center text-center w-full max-w-[1400px]
          px-4 sm:px-6 md:px-8 lg:px-12 py-10
          bg-white/10 backdrop-blur-md
          border border-white/20
          shadow-[0_0_40px_rgba(255,255,255,0.1)]
          rounded-lg
        "
      >
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] uppercase font-bold text-white mb-8">
          Projects
        </h2>

        <p className="text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] text-white mb-10 max-w-[800px]">
          Here you will find some of the personal projects that I created with
          each project containing its own case study
        </p>

        <div className="flex flex-col gap-10 w-full">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="
                flex flex-col lg:flex-row items-center justify-center p-6 gap-8 w-full
                bg-white/10 backdrop-blur-md
                border border-white/20
                shadow-[0_0_10px_rgba(255,255,255,0.1)]
                rounded-lg
              "
            >
              <div className="w-full max-w-[800px] aspect-video rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 px-2 lg:h-[400px]">
                <h3 className="text-[1.25rem] sm:text-[1.5rem] font-semibold">
                  {project.title}
                </h3>
                <p className="text-white text-[0.95rem] sm:text-[1.1rem] md:text-[1.25rem] max-w-[400px]">
                  {project.mainDescription}
                </p>
                <Link
                  to={`/projects/${project.id}`}
                  className="hero-btn w-full whitespace-nowrap"
                >
                  Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
