import { extendTheme } from '@chakra-ui/react';

const THEME_BREAKPOINTS = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

export const theme = extendTheme({
  breakpoints: THEME_BREAKPOINTS
});

export const BREAKPOINTS = Object.keys(THEME_BREAKPOINTS).reduce((acc, breakpoint) => {
  // eslint-disable-next-line
  // @ts-ignore
  acc[breakpoint] = `(min-width: ${THEME_BREAKPOINTS[breakpoint]})`;
  return acc;
}, {}) as typeof THEME_BREAKPOINTS;
