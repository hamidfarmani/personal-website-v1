import {
  Button,
  Container,
  Group,
  Image,
  List,
  rem,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { Check } from "tabler-icons-react";
import { useAboutMeStyles } from "./useAboutMeStyles";

export function AboutMe() {
  const { classes } = useAboutMeStyles();

  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A product <span className={classes.highlight}>enthusiast </span>
              <br /> at heart
            </Title>
            <Text color="dimmed" mt="md">
              I&apos;m a fun-loving and dynamic professional who enjoys working
              with others. I&apos;m a proactive team player who&apos;s always
              motivated to take on new challenges. I have great problem-solving
              and communication skills that help me work effectively with
              others.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <Check size={rem(12)} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>As an employee</b> - build scalable and safe applications,
                with different features, new ideas and sometime cool bugs!
              </List.Item>
              <List.Item>
                <b>Personal projects</b> - try out different APIs, new languages
                and frameworks
              </List.Item>
              <List.Item>
                <b>My interests</b> - playing Basketball and Chess, traveling,
                fishing, watching movies and spending time with my wife
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Source code
              </Button>
            </Group>
          </div>
          <Image
            mx="auto"
            radius="md"
            src="/pic.jpg"
            alt="my image"
            className={classes.image}
          />
        </div>
      </Container>
    </div>
  );
}
