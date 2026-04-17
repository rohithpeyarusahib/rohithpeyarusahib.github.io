import dynamic from "next/dynamic";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Metrics from "./components/Metrics";
import Architecture from "./components/Architecture";

const Hero = dynamic(() => import("./components/Hero"), { ssr: false });
const Navbar = dynamic(() => import("./components/Navbar"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full h-full flex flex-col bg-background text-foreground selection:bg-accent/30">
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
