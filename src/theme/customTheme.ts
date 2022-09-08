import { extendTheme, type ChakraTheme, type ThemeConfig, Colors } from "@chakra-ui/react";

export const colors: Colors = {};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts: ChakraTheme["fonts"] = {};

const styles: ChakraTheme["styles"] = {
  global: {},
};

const theme = extendTheme({ colors, config, fonts, styles });

export default theme;
