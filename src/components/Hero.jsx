// ICONS
import { MdOutlineFileDownload } from "react-icons/md";
function Hero() {
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative py-[150px] md:h-screen flex flex-col items-center md:justify-center px-4">
      <div className="flex flex-col md:justify-center md:items-center text-center w-full max-w-[1000px] p-6 sm:p-[6rem] gap-[30px] md:gap-[60px] bg-[radial-gradient(circle,_#2a2a2a,_#1f1f1f,_#000000)] shadow-[0_0_40px_rgba(0,0,0,0.6)] rounded-lg">
        <h1 className="hero-heading">Hi, I'm Stevan</h1>
        <h3 className="hero-secondary">
          Welcome to my little corner of the internet. Whether you're here by
          choice or cosmic accident — enjoy the scroll. If my work speaks to you
          (or whispers mildly), feel free to reach out. I'm just one message
          away and surprisingly friendly.
          <br />
          <span className="font-italic">Let's build something awesome!</span>
        </h3>
        <div className="flex items-center gap-5">
          <button
            onClick={() => smoothScroll("projects")}
            className="hero-btn wiggle-on-hover"
          >
            Projects
          </button>
          <a
            href="/assets/Nikolic_Stevan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="hero-resume-btn wiggle-on-hover gap-2 flex items-center"
          >
            <span>Resume</span>
            <MdOutlineFileDownload size={30} />
          </a>
        </div>
      </div>

      {/* Bottom page loader - CENTERED */}
      <div className="absolute bottom-8 flex justify-center w-full">
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default Hero;
