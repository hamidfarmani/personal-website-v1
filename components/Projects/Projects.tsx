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
        <Title mb="md">
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            Projects
          </Text>
        </Title>
        <SimpleGrid cols={largeScreen ? 3 : 1}>{projectCards}</SimpleGrid>
      </Container>
    </div>
  );
}
