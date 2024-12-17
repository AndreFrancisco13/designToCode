

//App

import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Box, Button } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const backgroundColor = useColorModeValue(
    "light.background",
    "dark.background"
  );
  const textColor = useColorModeValue("light.text", "dark.text");

  return (
    <Box
      bg={backgroundColor}
      color={textColor}
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Button onClick={toggleColorMode}>
        Alternar para {colorMode === "light" ? "Escuro" : "Claro"}
      </Button>
    </Box>
  );
}

export default App;
