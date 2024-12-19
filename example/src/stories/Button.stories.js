
// Importação da biblioteca React e do componente Button
import React from "react";
import Button from "./Button";

// Exportação do objeto padrão contendo metadados para a história
export default {
  title: "Components/Button", // Título da história
  component: Button, // Componente a ser usado na história
  argTypes: {
    label: { control: "text" }, // Controle para a prop label
    size: { control: "select", options: ["small", "medium", "large"] }, // Controle para a prop size com opções
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ], // Controle para a prop variant com opções
    },
    disabled: { control: "boolean" }, // Controle para a prop disabled
  },
};

// Função Template para criar uma história para o componente Button
const Template = (args) => <Button {...args} />;

// História do botão primário
export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button", // Rótulo do botão
  size: "medium", // Tamanho do botão
  variant: "primary", // Variante do botão
  disabled: false, // Estado desativado do botão
};

// História do botão secundário
export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button", // Rótulo do botão
  size: "medium", // Tamanho do botão
  variant: "secondary", // Variante do botão
  disabled: false, // Estado desativado do botão
};

// História do botão desativado
export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Button", // Rótulo do botão
  size: "medium", // Tamanho do botão
  variant: "primary", // Variante do botão
  disabled: true, // Estado desativado do botão
};