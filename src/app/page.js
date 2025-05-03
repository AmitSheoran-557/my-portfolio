import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Introduction />
      <AboutMe />
      <Projects /> */}
      <Services />
      <Skills />
      <Contact />

    </>
  );
}
