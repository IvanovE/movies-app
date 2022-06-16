import { extendTheme } from '@chakra-ui/react';

const THEME_BREAKPOINTS = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

type TBreakpoints = keyof typeof THEME_BREAKPOINTS

export const theme = extendTheme({
  breakpoints: THEME_BREAKPOINTS
});

export const BREAKPOINTS = Object.keys(THEME_BREAKPOINTS).reduce(
  (acc, breakpoint) => {
    acc[breakpoint as TBreakpoints] =
        `(min-width: ${THEME_BREAKPOINTS[breakpoint as TBreakpoints]})`;
    return acc;
  }, {} as typeof THEME_BREAKPOINTS);