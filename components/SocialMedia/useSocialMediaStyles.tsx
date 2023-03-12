import { createStyles, MantineTheme } from "@mantine/core";

export const useSocialMediaStyles = createStyles((theme: MantineTheme) => ({
  socialMediaIcons: {
    position: "fixed",
    bottom: 0,
    left: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    zIndex: 9999,
  },

  lineLeft: {
    borderLeft: "2px solid gray",
    height: 150,
  },

  right: {
    position: "fixed",
    bottom: 0,
    right: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    zIndex: 9999,
  },

  lineRight: {
    borderRight: "2px solid gray",
    height: 150,
  },

  verticalText: {
    writingMode: "vertical-rl",
  },
}));
