import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Achievements from "@/components/Achievements";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#0a0a0a]">
        <CustomCursor />
        <Navigation />

        <div id="home" className="relative">
          <ScrollyCanvas />
          <Overlay />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="expertise">
          <Expertise />
        </div>

        <div id="experience">
          <Experience />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="achievements">
          <Achievements />
        </div>

        <div id="contact">
          <Contact />
        </div>

        <footer className="py-12 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 bg-[#0a0a0a] border-t border-white/5">
          © {new Date().getFullYear()} Ravi Kumar Kaiwart. <span className="text-white/10">Engineered with Precision.</span>
        </footer>
      </main>
  );
}
