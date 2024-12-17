import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../src/theme';  // Caminho correto para o seu arquivo de tema

// Este decorator garante que o ChakraProvider será aplicado a todas as histórias
export const decorators = [
  (Story) => (
    <ChakraProvider theme={customTheme}>
      <Story />
    </ChakraProvider>
  ),
];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};

