import React from 'react';
import PropTypes from 'prop-types';

// Tokens
import tokens from '../design-system/tokens.json';

const Button = ({ label, size, variant, onClick, disabled}) => {
  const styles = {
    backgroundColor: tokens.colors[variant] || tokens.colors.primary,
    color: variant === 'light' ? tokens.colors.dark : tokens.colors.light,
    fontSize: tokens.fontSizes[size] || tokens.fontSizes.medium,
    padding: tokens.spacing.small,
    borderRadius: tokens.borderRadius.medium,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
  };

  return (
    <button style={styles} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

// Definir os tipos de propriedade e valores padrão
Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  size: 'medium',
  variant: 'primary',
  onClick: () => {},
  disabled: false,
};

export default Button;
