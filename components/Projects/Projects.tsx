import { Container, SimpleGrid, Title } from "@mantine/core";
import { myProjectsData } from "./MyProjectsData";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
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
    <Container id="projects">
      <Title>Projects</Title>
      <SimpleGrid cols={3}>{projectCards}</SimpleGrid>
    </Container>
  );
}
