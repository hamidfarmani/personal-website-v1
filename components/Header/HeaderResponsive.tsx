import {
  Burger,
  Container,
  Group,
  Header,
  Paper,
  rem,
  Text,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { useHeaderStyles } from "./useHeaderStyles";

const HEADER_HEIGHT = rem(60);

const links = [
  { link: "about-me", label: "About me" },
  { link: "experiences", label: "Experiences" },
  { link: "projects", label: "Projects" },
  { link: "contact-me", label: "Contact me" },
];

export function HeaderResponsive() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useHeaderStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setTimeout(() => {
          window.scrollTo({
            top: document.getElementById(link.link)!.offsetTop - 60,
            behavior: "smooth",
          });
        }, 100);
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <Text>Hamid Farmani</Text>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
