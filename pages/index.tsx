import { AboutMe } from "@/components/AboutMe/AboutMe";
import { ContactMe } from "@/components/ContactMe/ContactMe";
import { Experiences } from "@/components/Experiences/Experiences";
import { Projects } from "@/components/Projects/Projects";
import { Summary } from "@/components/Summary/Summary";

export default function Home() {
  return (
    <>
      <Summary />
      <AboutMe />
      <Experiences />
      <Projects />
      <ContactMe />
    </>
  );
}
