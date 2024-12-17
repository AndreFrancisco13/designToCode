import React from 'react';
import { Button } from "./Button";
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../theme';  // Certifique-se de que o caminho está correto

// Definindo a exportação padrão para o Storybook
export default {
  title: 'Botões/Primary',  // Título que aparece no Storybook
  component: Button,  // O componente que será utilizado nas histórias
  parameters: {
    layout: 'centered',  // Para centralizar o botão no Canvas do Storybook
  },
  tags: ['autodocs'],  // Para gerar documentação automática
  argTypes: {
    backgroundColor: { control: 'color' },  // Permite controlar a cor de fundo
  },
  args: {
    onClick: () => alert('Botão clicado!'),
  },
};

// Histórias de diferentes variações do botão
export const Primary = {
  args: {
    children: 'Clique Aqui',  // O texto do botão
    bg: "light.primary",  // Cor de fundo do botão (do seu tema)
    color: "white",  // Cor do texto do botão
    _hover: { bg: "light.secondary" },  // Cor do botão no hover
  },
};

export const Secondary = {
  args: {
    children: 'Clique Aqui',
    bg: "light.secondary",
    color: "white",
    _hover: { bg: "light.primary" },
  },
};

export const Large = {
  args: {
    children: 'Clique Aqui',
    size: 'lg',  // Tamanho do botão (grande)
    bg: "light.primary",
    color: "white",
    _hover: { bg: "light.secondary" },
  },
};

export const Small = {
  args: {
    children: 'Clique Aqui',
    size: 'sm',  // Tamanho do botão (pequeno)
    bg: "light.primary",
    color: "white",
    _hover: { bg: "light.secondary" },
  },
};