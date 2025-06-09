import { MdOutlineFileDownload } from "react-icons/md";

function Hero() {
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center px-2 py-24 sm:px-4 md:px-8 lg:px-12 xl:px-0 min-h-[90vh] md:min-h-screen pt-[4.5rem] bg-[url('/assets/contact_background.jpg')] bg-cover bg-center">
      {/* Content with glassmorphism */}
      <div
        className="relative z-10 flex flex-col justify-center items-center text-center w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl p-4 sm:p-8 md:p-10 gap-8 md:gap-14 
        bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-lg"
      >
        <h1 className="hero-heading">Hi, I'm Stevan</h1>

        <h3 className="hero-secondary">
          Welcome to my little corner of the internet. Whether you're here by
          choice or cosmic accident — enjoy the scroll. If my work speaks to you
          (or whispers mildly), feel free to reach out. I'm just one message
          away and surprisingly friendly.
          <br />
          <span className="font-italic">Let's build something awesome!</span>
        </h3>

        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => smoothScroll("projects")}
            className="hero-btn wiggle-on-hover w-full sm:w-auto"
          >
            Projects
          </button>
          <a
            href="/assets/Nikolic_Stevan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="hero-resume-btn wiggle-on-hover gap-2 flex items-center w-full sm:w-auto justify-center"
          >
            <span>Resume</span>
            <MdOutlineFileDownload size={28} />
          </a>
        </div>
      </div>

      {/* Loader */}
      <div className="absolute bottom-8 flex justify-center w-full z-10">
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default Hero;
