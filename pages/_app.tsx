import { HeaderResponsive } from "@/components/Header/HeaderResponsive";
import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <HeaderResponsive />

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
