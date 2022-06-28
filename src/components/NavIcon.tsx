import React from 'react';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type PropTypes = {
  label: string
  ariaLabel: string
  linkTo?: string
  onClick?: () => void
  icon: React.ReactElement
}

export const NavIcon = ({
  label,
  ariaLabel,
  icon,
  linkTo,
  onClick
}: PropTypes) => {

  return (
    linkTo
      ?
      <Tooltip label={label}>
        <Link to={linkTo}>
          <IconButton
            aria-label={ariaLabel}
            onClick={onClick}
            icon={icon}
            variant='solid'
          />
        </Link>
      </Tooltip>
      :
      <Tooltip label={label}>
        <IconButton
          aria-label={ariaLabel}
          onClick={onClick}
          icon={icon}
          variant='solid'
        />
      </Tooltip>
  );
};
