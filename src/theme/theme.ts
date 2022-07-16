import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react';
import { Button } from './components/Button';
import { CustomBox } from './components/CustomBox';

const THEME_BREAKPOINTS = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

type TBreakpoints = keyof typeof THEME_BREAKPOINTS

export const ListItem: ComponentStyleConfig = {
  baseStyle: ({ colorMode }) => ({
    _hover: colorMode === 'light'
      ? {
        background: 'cyan.400',
        transition: '.3s ease'
      }
      : {
        background: 'cyan.800',
        transition: '.3s ease'
      }
  })
};

export const theme = extendTheme({
  components: {
    Button,
    CustomBox,
    ListItem
  },
  breakpoints: THEME_BREAKPOINTS
});

export const BREAKPOINTS = Object.keys(THEME_BREAKPOINTS).reduce(
  (acc, breakpoint) => {
    acc[breakpoint as TBreakpoints] =
        `(max-width: ${THEME_BREAKPOINTS[breakpoint as TBreakpoints]})`;
    return acc;
  }, {} as typeof THEME_BREAKPOINTS);
