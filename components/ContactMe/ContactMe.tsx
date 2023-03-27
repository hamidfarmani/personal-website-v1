import { ActionIcon, Container, Group, Text, Title } from "@mantine/core";
import { BrandLinkedin, BrandTwitter, Mail } from "tabler-icons-react";
import { useContactMeStyles } from "./useContactMeStyles";

export function ContactMe() {
  const { classes, theme } = useContactMeStyles();

  return (
    <div className={classes.wrapper} id="contact-me">
      <Container>
        <Title mb="xs">
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            Contact me
          </Text>
        </Title>
        <Text>
          Although I am not actively seeking new job opportunities at this time,
          I am always open to connecting with others. Feel free to reach out to
          me with any questions or just to say hello. I will do my best to
          respond promptly.
        </Text>

        <Group position="center" my="md">
          <ActionIcon
            size="xl"
            variant="subtle"
            component="a"
            target="_blank"
            href="https://www.linkedin.com/in/hamidfarmani/"
          >
            <BrandLinkedin size="3rem" strokeWidth={1} />
          </ActionIcon>

          <ActionIcon
            size="xl"
            variant="subtle"
            component="a"
            target="_blank"
            href="https://twitter.com/Hamo_far/"
          >
            <BrandTwitter size="3rem" strokeWidth={1} />
          </ActionIcon>

          <ActionIcon
            size="xl"
            variant="subtle"
            component="a"
            href="mailto:hamidfarmani1@gamil.com"
          >
            <Mail size="3rem" strokeWidth={1} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
