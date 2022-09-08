import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import Footer from "~/components/Footer";
import Header from "~/components/Header";

import "normalize.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
};

export default MyApp;
