import {
  Container,
  Grid,
  Image,
  List,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export function AboutMe() {
  return (
    <Container>
      <Title>About me</Title>
      <Grid grow>
        <Grid.Col span={8}>
          <Stack>
            <Text fz="lg">
              Hello! My name is Hamid and I enjoy creating things that live on
              the internet. My interest in web development started back in 2014
              when I decided to study computer engineering at university!
            </Text>
            <Text>
              Fast-forward to today, and I’ve had the privilege of working at a
              consultant company, a fintech company and a start-up. My main
              focus these days is building accessible, inclusive products and
              digital experiences at Segula technologies for a variety of
              clients. Here are a few technologies I’ve been working with
              recently:
            </Text>
            <List>
              <List.Item>Java</List.Item>
              <List.Item>Spring boot</List.Item>
              <List.Item>React</List.Item>
              <List.Item>Amazon Web Service (AWS)</List.Item>
              <List.Item>MySQL</List.Item>
            </List>
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <Image
            maw={300}
            mx="auto"
            radius="md"
            alt="My Image"
            src="/pic.jpg"
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
