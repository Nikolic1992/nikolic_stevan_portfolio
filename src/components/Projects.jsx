import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import projectsData from "../data/projectsData";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

function PrevButton({ onClick, enabled }) {
  return (
    <button
      className="flex items-center justify-center text-white bg-black/50 hover:bg-[#7843E9] p-3 rounded-full cursor-pointer transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={!enabled}
      aria-label="Previous Slide"
    >
      <MdOutlineArrowBackIos size={24} />
    </button>
  );
}

function NextButton({ onClick, enabled }) {
  return (
    <button
      className="flex items-center justify-center text-white bg-black/50 hover:bg-[#7843E9] p-3 rounded-full cursor-pointer transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={!enabled}
      aria-label="Next Slide"
    >
      <MdOutlineArrowForwardIos size={24} />
    </button>
  );
}

function DotButton({ selected, onClick }) {
  return (
    <button
      className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
        selected ? "bg-white" : "bg-gray-500 hover:bg-gray-300"
      }`}
      onClick={onClick}
      aria-label={selected ? "Current Slide" : "Go to Slide"}
    />
  );
}

function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi?.scrollTo(index),
    [emblaApi]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-30 bg-[url('/assets/background.jpg')] bg-cover bg-center">
      <div
        className="
          flex flex-col justify-center items-center text-center w-full max-w-[1400px]
          px-4 sm:px-6 md:px-8 lg:px-12 py-10
          bg-white/10 backdrop-blur-md
          border border-white/20
          shadow-[0_0_40px_rgba(255,255,255,0.1)]
          rounded-lg
        "
      >
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] uppercase font-bold text-white mb-8">
          Projects
        </h2>

        <p className="text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] text-white mb-10 max-w-[800px]">
          Here you will find some of the personal projects that I created with
          each project containing its own case study
        </p>

        <div className="flex items-center gap-4 w-full">
          <div className="hidden md:block">
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          </div>

          {/* Carousel */}
          <div className="relative flex-1 overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projectsData.map((project) => (
                <div key={project.id} className="min-w-full px-4">
                  <div
                    className="
                      flex flex-col lg:flex-row items-center justify-center p-6 gap-8 w-full
                      bg-white/10 backdrop-blur-md
                      border border-white/20
                      shadow-[0_0_10px_rgba(255,255,255,0.1)]
                      rounded-lg
                    "
                  >
                    <div className="w-full max-w-[800px] aspect-video rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 px-2 lg:h-[400px]">
                      <h3 className="text-[1.25rem] sm:text-[1.5rem] font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="text-white text-[0.95rem] sm:text-[1.1rem] md:text-[1.25rem] max-w-[400px]">
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
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
          </div>
        </div>

        <div className="flex md:hidden gap-4 mt-4">
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-6">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
