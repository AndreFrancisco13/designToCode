// Importação da biblioteca React e PropTypes
import React from "react";
import PropTypes from "prop-types";

// Tokens
import tokens from "../design-system/tokens.json";

// Definição do componente Button
const Button = ({ label, size, variant, onClick, disabled }) => {
  // Estilos do botão baseados nos tokens e nas props
  const styles = {
    backgroundColor: tokens.colors[variant] || tokens.colors.primary, // Cor de fundo baseada na variante
    color: variant === "light" ? tokens.colors.dark : tokens.colors.light, // Cor do texto baseada na variante
    fontSize: tokens.fontSizes[size] || tokens.fontSizes.medium, // Tamanho da fonte baseado no tamanho
    padding: tokens.spacing.small, // Espaçamento do botão
    borderRadius: tokens.borderRadius.medium, // Borda arredondada
    border: "none", // Sem borda
    cursor: disabled ? "not-allowed" : "pointer", // Cursor baseado no estado desativado
    opacity: disabled ? 0.6 : 1, // Opacidade baseada no estado desativado
  };

  // Renderização do botão
  return (
    <button style={styles} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

// Definição dos tipos de propriedade e valores padrão
Button.propTypes = {
  label: PropTypes.string.isRequired, // Rótulo é obrigatório e deve ser uma string
  size: PropTypes.oneOf(["small", "medium", "large"]), // Tamanho deve ser uma das opções
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]), // Variante deve ser uma das opções
  onClick: PropTypes.func, // onClick deve ser uma função
  disabled: PropTypes.bool, // disabled deve ser um booleano
};

// Valores padrão das propriedades
Button.defaultProps = {
  size: "medium", // Tamanho padrão é médio
  variant: "primary", // Variante padrão é primária
  onClick: () => {}, // Função onClick padrão é vazia
  disabled: false, // Estado desativado padrão é falso
};

// Exportação do componente Button
export default Button;