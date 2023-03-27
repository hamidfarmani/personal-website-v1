import { Container, SimpleGrid, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { myProjectsData } from "./MyProjectsData";
import { ProjectCard } from "./ProjectCard";
import { useProjectsStyles } from "./useProjectsStyles";

export function Projects() {
  const largeScreen = useMediaQuery("(min-width: 60em)");
  const { classes, theme } = useProjectsStyles();

  const projectCards = myProjectsData.map((item) => {
    return (
      <ProjectCard
        key={item.title}
        image={item.image}
        title={item.title}
        description={item.description}
        country={item.country}
        badges={item.badges}
        url={item.url}
        live_url={item.live_url}
      />
    );
  });
  return (
    <div className={classes.wrapper} id="projects">
      <Container className={classes.inner}>
        <Title mb="xs">
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            Projects
          </Text>
        </Title>
        <Text color="dimmed">
          In my free time, I love tinkering with new technologies and
          experimenting with new ideas. Check out some of the cool projects
          I&apos;ve been working on! From visualizing sorting algorithms to
          creating a personalized Spotify data dashboard, these projects
          showcase my passion for coding and creativity. Browse through the
          cards below and get a glimpse of the tech stack, main language, and
          tools I used to build these awesome projects.
        </Text>
        <SimpleGrid mt="md" cols={largeScreen ? 3 : 1}>
          {projectCards}
        </SimpleGrid>
      </Container>
    </div>
  );
}
