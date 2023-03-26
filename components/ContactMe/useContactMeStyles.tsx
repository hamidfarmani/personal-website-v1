import { createStyles, rem } from "@mantine/core";

export const useContactMeStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[2],

    paddingTop: rem(40),
    paddingBottom: rem(40),
  },
}));
