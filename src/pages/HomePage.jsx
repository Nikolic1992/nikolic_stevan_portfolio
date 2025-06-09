import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, useInView } from "framer-motion";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}

function HomePage() {
  const location = useLocation();

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
          <Section>
            <Hero />
          </Section>
        </section>
        <section id="about">
          <Section>
            <About />
          </Section>
        </section>
        <section id="projects">
          <Section>
            <Projects />
          </Section>
        </section>
        <section id="contact">
          <Section>
            <Contact />
          </Section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
