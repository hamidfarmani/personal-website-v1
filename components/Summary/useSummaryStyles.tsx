import { createStyles, rem } from "@mantine/core";

export const useSummaryStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "100vh",
    position: "relative",
    paddingTop: rem(150),

    [theme.fn.smallerThan("sm")]: {
      minHeight: "70vh",

      paddingTop: rem(100),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    marginTop: 250,
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xl,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  control: {
    marginTop: theme.spacing.lg,

    [theme.fn.smallerThan("xs")]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,
    },
  },
}));
