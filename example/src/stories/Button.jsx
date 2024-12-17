import React from 'react';
import PropTypes from 'prop-types';
import { Button as ChakraButton } from "@chakra-ui/react";

/** Primary UI component for user interaction */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <ChakraButton
      bg={backgroundColor}
      size={size}
      variant={mode}
      {...props}
    >
      {label}
    </ChakraButton>
  );
};

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'md',
  onClick: undefined,
};
