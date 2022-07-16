import React from 'react';
import {
  ComponentStyleConfig,
  useStyleConfig,
  ThemingProps,
  HTMLChakraProps,
  Box
} from '@chakra-ui/react';

export const CustomBox: ComponentStyleConfig = {
  baseStyle:  ({ colorMode }) => ({
    background: colorMode === 'light' ? 'rgba(211, 211, 211, .5)' : 'rgba(0, 0, 0, .5)',
    color: colorMode === 'light' ? 'black' : 'white'
  })
};

interface CustomBoxProps extends HTMLChakraProps<'div'>, ThemingProps {}

export const BoxWithColorMode = React.forwardRef<HTMLDivElement, CustomBoxProps>((props, ref) => {
  const styles = useStyleConfig('CustomBox');
  return <Box __css={styles} {...props} ref={ref} />;
});

BoxWithColorMode.displayName = 'BoxWithColorMode';
