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
  { link: "Link1", label: "Label1" },
  { link: "Link2", label: "Label2" },
  { link: "Link3", label: "Label3" },
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
