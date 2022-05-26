import React from 'react';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type PropTypes = {
  label: string
  ariaLabel: string
  linkTo: string
  background: string
  icon: React.ReactElement
}

export const NavIcon = ({ label, ariaLabel, background, icon, linkTo }: PropTypes) => {
  return (
    <Tooltip label={label}>
      <Link to={linkTo}>
        <IconButton
          aria-label={ariaLabel}
          bg={background}
          icon={icon} />
      </Link>
    </Tooltip>
  );
};
