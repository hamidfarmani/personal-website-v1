import { AboutMe } from "@/components/AboutMe/AboutMe";
import { ContactMe } from "@/components/ContactMe/ContactMe";
import { Experiences } from "@/components/Experiences/Experiences";
import { Projects } from "@/components/Projects/Projects";
import { SocialMedia } from "@/components/SocialMedia/SocialMedia";
import { Summary } from "@/components/Summary/Summary";
import { Affix, Button, rem, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { ArrowUp } from "tabler-icons-react";

export default function Home() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<ArrowUp size="1rem" />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
      <Summary />
      <AboutMe />
      <Experiences />
      <Projects />
      <ContactMe />
      <SocialMedia />
    </>
  );
}
