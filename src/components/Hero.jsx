function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center  bg-[linear-gradient(to_right,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./assets/hero-background.svg')] text-center px-4 gap-[60px]">
      <h1 className="text-6xl font-extrabold text-gray-900 uppercase">
        Hey, I'm Stevan Nikolic
      </h1>
      <h3 className="max-w-2xl text-lg text-gray-800">
        Welcome to my portfolio website. I am passionate about frontend
        development and building beautiful web apps.
      </h3>
      <a href="#projects" className="hero-link shake-on-hover">
        Projects
      </a>
    </div>
  );
}

export default Hero;
