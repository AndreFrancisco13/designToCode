
//theme.js

import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    light: {
      primary: "#007BFF",
      secondary: "#FF5722",
      background: "#FFFFFF",
      text: "#000000",
    },
    dark: {
      primary: "#1E90FF",
      secondary: "#FF4500",
      background: "#121212",
      text: "#FFFFFF",
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default customTheme;
