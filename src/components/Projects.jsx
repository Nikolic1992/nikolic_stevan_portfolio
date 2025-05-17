function Projects() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-[radial-gradient(circle,_#2a2a2a,_#1f1f1f,_#000000)]">
      <div className="flex flex-col justify-center items-center text-center w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12 py-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold text-white mb-8">
          Projects
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-white mb-10 max-w-[800px]">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>

        <div className="flex flex-col gap-10 w-full">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="flex flex-col lg:flex-row items-center justify-center p-6 gap-8 w-full bg-[radial-gradient(circle,_#ffffff,_#e0e0e0,_#c0c0c0)] shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-lg"
            >
              <div className="w-full lg:w-[600px] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xl">
                Project {project} Image
              </div>

              <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 px-2 lg:h-[400px]">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Project Title {project}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-[1rem] max-w-[400px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  ullam suscipit nisi non facere. Temporibus neque doloribus
                  error eum reprehenderit molestiae exercitationem voluptatem ut
                  autem, facilis voluptate quas alias molestias.
                </p>
                <a href="#projects" className="hero-link shake-on-hover">
                  Case Study
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
