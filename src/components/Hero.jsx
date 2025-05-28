import { MdOutlineFileDownload } from "react-icons/md";
function Hero() {
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative flex flex-col items-center justify-center px-2 py-24 sm:px-4 md:px-8 lg:px-12 xl:px-0 min-h-[90vh] md:min-h-screen pt-[4.5rem]">
      <div className="flex flex-col justify-center items-center text-center w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl p-4 sm:p-8 md:p-10 gap-8 md:gap-14 bg-[radial-gradient(circle,_#2a2a2a,_#1f1f1f,_#000000)] shadow-[0_0_40px_rgba(0,0,0,0.6)] rounded-lg">
        <h1 className="hero-heading">Hi, I'm Stevan</h1>
        <h3 className="hero-secondary">
          Welcome to my little corner of the internet. Whether you're here by
          choice or cosmic accident — enjoy the scroll. If my work speaks to you
          (or whispers mildly), feel free to reach out. I'm just one message
          away and surprisingly friendly.
          <br />
          <span className="font-italic">Let's build something awesome!</span>
        </h3>
        <div className="flex  items-center gap-4 sm:gap-6">
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
      <div className="absolute bottom-8 flex justify-center w-full">
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default Hero;
