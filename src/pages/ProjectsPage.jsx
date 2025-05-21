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

    // Scroll back to the projects section
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Project not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 flex flex-col items-center">
      <button
        onClick={handleBack}
        className="text-blue-400  mb-6 cursor-pointer"
      >
        GO BACK
      </button>

      <div className="max-w-[1000px] w-full flex flex-col gap-8 items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          {project.title}
        </h1>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg shadow-lg"
        />

        <p className="text-lg sm:text-xl text-center text-gray-300 max-w-[800px]">
          {project.description}
        </p>

        <div className="flex gap-6 mt-6">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 uppercase hover:text-blue-600"
            >
              Live Preview
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-600"
            >
              <FaGithub size={40} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
