import { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  variants: {
    solid: {
      background: 'primary',
      _hover: {
        background: 'onHover'
      }
    }
  }
};
