import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ExternalLink, Eye, Star } from "tabler-icons-react";
import { useProjectsStyles } from "./useProjectsStyles";

interface BadgeCardProps {
  image: string;
  title: string;
  country: string;
  description: string;
  url: string;
  live_url: string;
  badges: string[];
}

export function ProjectCard({
  image,
  title,
  description,
  country,
  url,
  live_url,
  badges,
}: BadgeCardProps) {
  const largeScreen = useMediaQuery("(min-width: 60em)");

  const { classes, theme } = useProjectsStyles();

  const features = badges.map((badge) => (
    <Badge color={theme.colorScheme === "light" ? "dark" : "gray"} key={badge}>
      {badge}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm">{country}</Badge>
        </Group>
        <Text fz="sm" mt="xs" lineClamp={7} mih={largeScreen ? 151 : 120}>
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Technologies
        </Text>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button
          radius="md"
          style={{ flex: 1 }}
          leftIcon={<ExternalLink />}
          component="a"
          target="_blank"
          href={url}
        >
          To repo
        </Button>
        <ActionIcon
          variant="default"
          radius="md"
          size={36}
          component="a"
          target="_blank"
          href={live_url}
        >
          <Eye size="1.1rem" className={classes.star} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
