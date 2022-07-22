import { extendTheme } from '@chakra-ui/react';
import { Button } from './components/Button';
import { CustomBox } from './components/CustomBox';
import { Text } from './components/Text';
import { CustomListItem } from './components/CustomListItem';
import { colors } from './colors/colors';

const THEME_BREAKPOINTS = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

type TBreakpoints = keyof typeof THEME_BREAKPOINTS

export const theme = extendTheme({
  semanticTokens: {
    colors
  },
  components: {
    Button,
    Text,
    CustomListItem,
    CustomBox
  },
  breakpoints: THEME_BREAKPOINTS
});

export const BREAKPOINTS = Object.keys(THEME_BREAKPOINTS).reduce(
  (acc, breakpoint) => {
    acc[breakpoint as TBreakpoints] =
        `(max-width: ${THEME_BREAKPOINTS[breakpoint as TBreakpoints]})`;
    return acc;
  }, {} as typeof THEME_BREAKPOINTS);
