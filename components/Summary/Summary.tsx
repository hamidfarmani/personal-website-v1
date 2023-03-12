import { Button, Container, Group, Stack, Text, Title } from "@mantine/core";
import { FileDownload } from "tabler-icons-react";

export function Summary() {
  return (
    <Container>
      <Stack>
        <Text fz="lg">
          Hi! My name is <Title>Hamid</Title>
        </Text>
        <Text>
          I am a highly motivated software engineer with a strong track record
          of delivering successful projects for different clients. I have a wide
          range of programming skills and am proficient in Java programming
          language. In addition, I have a strong understanding of databases and
          recently added React to my skill set, allowing me to take on
          full-stack responsibilities.
        </Text>
      </Stack>
      <Group position="center">
        <Button
          variant="outline"
          leftIcon={<FileDownload />}
          component="a"
          target="_blank"
          href="https://drive.google.com/file/d/1EsrNKthQVzyzg6yppHQPiNO29B3xNhUb/view?usp=share_link"
        >
          Resume
        </Button>
      </Group>
    </Container>
  );
}
