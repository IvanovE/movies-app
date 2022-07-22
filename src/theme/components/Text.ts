import { ComponentStyleConfig } from '@chakra-ui/react';

export const Text: ComponentStyleConfig = {
  variants: {
    withColorMode: {
      color: 'primary',
      _hover: {
        color: 'onHover',
        transition: '.3s ease'
      }
    }
  }
};
