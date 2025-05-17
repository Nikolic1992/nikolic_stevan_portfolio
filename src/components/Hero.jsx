function Hero() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-[radial-gradient(circle,_#2a2a2a,_#1f1f1f,_#000000)]">
      <div className="flex flex-col justify-center items-center text-center w-[1200px] p-[6rem] gap-[60px]  shadow-[0_0_20px_rgba(255,255,255,0.08)] rounded-lg">
        <h1 className="hero-heading">Hi, I'm Stevan</h1>
        <h3 className="hero-secondary">
          Welcome to my little corner of the internet. Whether you're here by
          choice or cosmic accident — enjoy the scroll. If my work speaks to you
          (or whispers mildly), feel free to reach out. I'm just one message
          away and surprisingly friendly. Let's build something awesome!
        </h3>
        <a href="#projects" className="hero-link shake-on-hover">
          Projects
        </a>
      </div>
      {/* Bottom page loader */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="loader" />
      </div>
    </div>
  );
}

export default Hero;
