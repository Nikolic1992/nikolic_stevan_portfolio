// ROUTER
import { Link } from "react-router-dom";
import projectsData from "../data/projectsData";

function Projects() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-30">
      <div className="flex flex-col justify-center items-center text-center w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12 py-10 bg-[radial-gradient(circle,_#2a2a2a,_#1f1f1f,_#000000)] shadow-[0_0_40px_rgba(0,0,0,0.6)] rounded-lg">
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] uppercase font-bold text-white mb-8">
          Projects
        </h2>

        <p className="text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] text-white mb-10 max-w-[800px]">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>

        <div className="flex flex-col gap-10 w-full">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col lg:flex-row items-center justify-center p-6 gap-8 w-full bg-[radial-gradient(circle,_#ffffff,_#e0e0e0,_#c0c0c0)] shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-lg"
            >
              <div className="w-full lg:w-[600px]  md:h-[350px] lg:h-[400px] rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>

              <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 px-2 lg:h-[400px]">
                <h3 className="text-[1.25rem] sm:text-[1.5rem] font-semibold">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-[0.95rem] sm:text-[1.1rem] md:text-[1.25rem] max-w-[400px]">
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
