import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorModeScript } from "@chakra-ui/react"; // Corrigido
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppTokens from './AppTokens';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      {/* <App /> */}
      <AppTokens />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
