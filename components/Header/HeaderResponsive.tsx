import {
  ActionIcon,
  Burger,
  ColorScheme,
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
import { MoonStars, Sun } from "tabler-icons-react";
import { useHeaderStyles } from "./useHeaderStyles";

const HEADER_HEIGHT = rem(60);

const links = [
  { link: "about-me", label: "About me" },
  { link: "experiences", label: "Experiences" },
  { link: "projects", label: "Projects" },
  { link: "contact-me", label: "Contact me" },
];

export function HeaderResponsive({
  colorScheme,
  toggleColorScheme,
}: {
  colorScheme: ColorScheme;
  toggleColorScheme: Function;
}) {
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
        <Group position="right">
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <ActionIcon
            onClick={() => toggleColorScheme()}
            size="lg"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.yellow[4]
                  : theme.colors.blue[6],
            })}
          >
            {colorScheme === "dark" ? (
              <Sun size="1.2rem" />
            ) : (
              <MoonStars size="1.2rem" />
            )}
          </ActionIcon>
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
