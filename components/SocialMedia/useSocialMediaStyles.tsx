import { createStyles, MantineTheme } from "@mantine/core";

export const useSocialMediaStyles = createStyles((theme: MantineTheme) => ({
  socialMediaIcons: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },

    position: "fixed",
    bottom: 0,
    left: 130,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    zIndex: 9999,
  },

  lineLeft: {
    borderRight: "1.5px solid #868e96",
    height: 90,
  },

  right: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },

    position: "fixed",
    bottom: 0,
    right: 130,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    zIndex: 9999,
  },

  lineRight: {
    borderRight: "1.5px solid #868e96",
    height: 90,
  },

  verticalText: {
    writingMode: "vertical-rl",
  },
}));
