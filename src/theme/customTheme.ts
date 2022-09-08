import { extendTheme, type ChakraTheme, type ThemeConfig, Colors } from "@chakra-ui/react";

export const colors: Colors = {};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts: ChakraTheme["fonts"] = {
  body: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  heading:
    'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
};

const styles: ChakraTheme["styles"] = {
  global: {},
};

const theme = extendTheme({ colors, config, fonts, styles });

export default theme;
