import React from 'react';
import {
  Box,
  Container,
  Heading,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { RiPlayList2Fill } from 'react-icons/ri';
import { GoSignIn } from 'react-icons/go';
import { ImExit } from 'react-icons/im';
import { SearchBar } from '../components/SearchBar';
import { NavIcon } from '../components/NavIcon';
import { useAppDispatch, useAppSelector } from '../store/store';
import { logout } from '../store/slices/authSlice';
import { auth } from '../store/selectors/selectors';
import { text } from '../constants/text';

const styles = {
  header: {
    width: '100%',
    position: 'sticky',
    background: 'primary',
    paddingY: 4,
    top: 0,
    zIndex: 999
  },
  container: {
    maxWidth: 'container.xl',
    display: 'flex'
  },
  title: {
    size: 'lg',
    marginRight: 6
  },
  icons: {
    display: 'flex',
    gap: 2
  }
};

const pathsToRedirect = [
  '/favourites',
];

export const Header = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(auth.isSignedIn);
  const history = useHistory<History>();
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const signOut = () => {
    const { pathname } = history.location;
    dispatch(logout());
    if (pathsToRedirect.includes(pathname)) {
      history.replace('/catalog');
    }
  };

  const navigationConfig = {
    authorized: [
      {
        label: text.favourites,
        ariaLabel: 'favourites',
        icon: <MdFavorite/>,
        linkTo: '/favourites'
      },
      {
        label: text.signOut,
        ariaLabel: 'sign-out',
        icon: <ImExit />,
        onClick: signOut
      },
    ],
    notAuthorized: [
      {
        label: text.signIn,
        ariaLabel: 'sign-in',
        icon: <GoSignIn />,
        linkTo: '/sign-in'
      },
    ],
    renderAnyway: [
      {
        label: text.movies,
        ariaLabel: 'movies',
        icon: <RiPlayList2Fill />,
        linkTo: '/catalog'
      },
      {
        label: text.colorMode,
        ariaLabel: 'color-mode',
        icon: <SwitchIcon />,
        onClick: toggleColorMode
      },
    ]
  };

  return (
    <Box sx={styles.header}>
      <Container sx={styles.container}>
        <Link to='/'>
          <Heading as='h2' sx={styles.title}>
            {text.name}
          </Heading>
        </Link>
        <SearchBar />
        <Box sx={styles.icons}>
          {isAuthenticated &&
              navigationConfig.authorized.map((iconConf) => (
                <NavIcon key={iconConf.ariaLabel} {...iconConf} />
              ))
          }
          {!isAuthenticated &&
              navigationConfig.notAuthorized.map((iconConf) => (
                <NavIcon key={iconConf.ariaLabel} {...iconConf} />
              ))
          }
          {navigationConfig.renderAnyway.map((iconConf) => (
            <NavIcon key={iconConf.ariaLabel} {...iconConf} />
          ))
          }
        </Box>
      </Container>
    </Box>
  );
};
