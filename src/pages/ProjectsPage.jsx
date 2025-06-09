// ROUTER
import { useParams, useNavigate } from "react-router-dom";
// PROJECTS DATA
import projectsData from "../data/projectsData";
// ICONS
import { FaGithub } from "react-icons/fa";

function ProjectsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === parseInt(id));

  const handleBack = () => {
    navigate("/", { state: { scrollTo: "projects" } });

    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="relative min-h-screen flex items-center justify-center text-white text-xl ">
        <button
          onClick={handleBack}
          className="absolute navbar-btn cursor-pointer top-5 left-5"
        >
          GO BACK
        </button>
        Project not found.
      </div>
    );
  }

  return (
    <div
      className="
        relative min-h-screen text-white px-6 py-12 flex flex-col items-center justify-center
        bg-[url('/assets/projects_background.jpg')] bg-cover bg-center
      "
    >
      <button
        onClick={handleBack}
        className="absolute navbar-btn cursor-pointer top-5 left-5"
      >
        GO BACK
      </button>

      <div
        className="
          max-w-[1200px] w-full flex flex-col gap-10 items-center
          bg-white/10 backdrop-blur-md border border-white/20
          shadow-[0_0_40px_rgba(255,255,255,0.1)]
          rounded-lg p-10
        "
      >
        <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-center text-white tracking-tight">
          {project.title}
        </h1>

        <img
          src={project.image}
          alt={project.title}
          className="hidden md:block max-h-[600px] object-contain rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]"
        />

        <p className="text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] text-center text-gray-300 leading-relaxed max-w-[900px]">
          {project.description}
        </p>

        <div className="flex gap-8 items-center justify-center">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn text-nowrap"
            >
              Live Preview
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-transform duration-500 hover:scale-130 hover:rotate-[360deg] cursor-pointer"
              title="View on GitHub"
            >
              <FaGithub size={46} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
