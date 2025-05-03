import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <Hero />
      <Introduction />
      <AboutMe />
      <Projects />
      <Services />
      <Skills />
      <Contact />
    </Suspense>
  );
}
