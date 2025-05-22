import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  const location = useLocation();

  // Scroll to the desired section
  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="scroll-smooth">
      <NavBar />
      <main>
        <section id="home">
          <Hero />
          <hr
            className="w-full border-t border-white my-5"
            aria-hidden="true"
          />
        </section>
        <section id="about">
          <About />
          <hr
            className="w-full border-t border-white my-5"
            aria-hidden="true"
          />
        </section>
        <section id="projects">
          <Projects />
          <hr
            className="w-full border-t border-white my-5"
            aria-hidden="true"
          />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
