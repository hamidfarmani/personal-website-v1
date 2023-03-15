import { createStyles, rem } from "@mantine/core";

export const useExperiencesStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: "relative",
    paddingTop: rem(40),
    paddingBottom: rem(120),

    [theme.fn.smallerThan("sm")]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(30),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(20),

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(18),
    },
  },

  tabs: {
    fontWeight: 500,
    padding: `${theme.spacing.md} ${theme.spacing.md}`,
  },

  tabInner: {
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
  },
}));
