import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Fonts from "~/theme/Fonts";
import theme from "~/theme/customTheme";

import "normalize.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
};

export default MyApp;
