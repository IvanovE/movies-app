import { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  variants: {
    solid: ({ colorMode }) => ({
      background: colorMode === 'light' ? 'cyan.600' : 'cyan.900',
      color: colorMode === 'light' ? 'black' : 'white',
      _hover: colorMode === 'light'
        ? {
          background: 'cyan.400'
        }
        : {
          background: 'cyan.800'
        }
    })
  }
};
