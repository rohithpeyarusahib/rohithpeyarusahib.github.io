import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Architecture from "./components/Architecture";
import Metrics from "./components/Metrics";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full h-full flex flex-col bg-black text-white selection:bg-white/30">
        <Hero />
        <Metrics />
        <About />
        <Experience />
        <Architecture />
        <Services />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
