import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Experiences } from "@/components/Experiences/Experiences";
import { Summary } from "@/components/Summary/Summary";

export default function Home() {
  return (
    <>
      <Summary />
      <AboutMe />
      <Experiences />
    </>
  );
}
