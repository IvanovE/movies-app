import React from 'react';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type PropTypes = {
  label: string
  ariaLabel: string
  background: string
  linkTo?: string
  onClick?: () => void
  icon: React.ReactElement
}

export const NavIcon = (props: PropTypes) => {
  const { label, ariaLabel, background, icon, linkTo, onClick } = props;

  return (
    <>
      {
        linkTo
          ?
          <Tooltip label={label}>
            <Link to={linkTo}>
              <IconButton
                aria-label={ariaLabel}
                onClick={onClick}
                bg={background}
                icon={icon}/>
            </Link>
          </Tooltip>
          :
          <Tooltip label={label}>
            <IconButton
              aria-label={ariaLabel}
              onClick={onClick}
              bg={background}
              icon={icon}/>
          </Tooltip>
      }
    </>
  );
};
