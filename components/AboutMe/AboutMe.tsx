import {
  Container,
  Image,
  List,
  rem,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Check } from "tabler-icons-react";
import { useAboutMeStyles } from "./useAboutMeStyles";

export function AboutMe() {
  const largeScreen = useMediaQuery("(min-width: 60em)");
  const { classes } = useAboutMeStyles();

  return (
    <div className={classes.wrapper} id="about-me">
      <Container className={classes.inner}>
        <SimpleGrid cols={largeScreen ? 2 : 1} spacing="xs">
          <div>
            <Title className={classes.title}>
              A product <span className={classes.highlight}>enthusiast</span>
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
          </div>
          <div>
            <Image mx="auto" radius="md" src="/pic.jpg" alt="my image" />
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
}
