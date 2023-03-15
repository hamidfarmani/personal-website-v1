import { Button, Container, Text, Title } from "@mantine/core";
import { Dots } from "./Dots";
import { useSummaryStyles } from "./useSummaryStyles";

export function Summary() {
  const { classes } = useSummaryStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          I&apos;m{" "}
          <Text component="span" className={classes.highlight} inherit>
            Hamid
          </Text>
          , a Software Engineer!
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            This website is a space where I share my experiences, interests, and
            personal projects. If you&apos;re interested in learning more about
            me and my work, keep scrolling to explore my skills and projects.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
            mr="md"
            component="a"
            target="_blank"
            href="https://drive.google.com/file/d/1EsrNKthQVzyzg6yppHQPiNO29B3xNhUb/view?usp=share_link"
          >
            Check my resume
          </Button>
          <Button className={classes.control} size="lg">
            Purchase a license
          </Button>
        </div>
      </div>
    </Container>
  );
}
