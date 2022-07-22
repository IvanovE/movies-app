import React from 'react';
import {
  ComponentStyleConfig,
  useStyleConfig,
  ThemingProps,
  HTMLChakraProps,
  chakra
} from '@chakra-ui/react';

export const CustomListItem: ComponentStyleConfig = {
  variants: {
    ghost: {
      color: 'primary',
      _hover: {
        color: 'onHover',
        transition: '.3s ease'
      }
    },
    solid: {
      _hover: {
        background: 'primary',
        transition: '.3s ease'
      }
    }
  }
};

interface CustomListItemProps extends HTMLChakraProps<'li'>, ThemingProps {}

export const ListItemWithColorMode = ((props: CustomListItemProps) => {
  const { variant } = props;
  const styles = useStyleConfig('CustomListItem', { variant });
  return <chakra.li __css={styles} {...props} />;
});
