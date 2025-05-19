function Hero() {
  return (
    <div className="relative py-[150px]  md:h-screen flex flex-col items-center md:justify-center bg-[radial-gradient(circle,_#2a2a2a,_#1f1f1f,_#000000)] px-4">
      <div className="flex flex-col md:justify-center md:items-center text-center w-full max-w-[1000px] p-6 sm:p-[6rem] gap-[30px] md:gap-[60px] bg-[radial-gradient(circle,_#ebeaea,_#e0e0e0,_#c0c0c0)] shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-lg">
        <h1 className="hero-heading">Hi, I'm Stevan</h1>
        <h3 className="hero-secondary">
          Welcome to my little corner of the internet. Whether you're here by
          choice or cosmic accident — enjoy the scroll. If my work speaks to you
          (or whispers mildly), feel free to reach out. I'm just one message
          away and surprisingly friendly.
          <br />
          <span className="font-italic">Let's build something awesome!</span>
        </h3>
        <a href="#projects" className="hero-link wiggle-on-hover">
          Projects
        </a>
      </div>
      {/* Bottom page loader */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="loader-white" />
      </div>
    </div>
  );
}

export default Hero;
