import React from 'react';
import {
  Box,
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { RiPlayList2Fill } from 'react-icons/ri';
import { GoSignIn } from 'react-icons/go';
import { AiOutlineSearch } from 'react-icons/ai';
import { ImExit } from 'react-icons/im';
import { text } from '../constants/text';
import { NavIcon } from '../components/NavIcon';
import { useAppDispatch, useAppSelector } from '../store/store';
import { logout } from '../store/slices/authSlice';
import { auth } from '../store/selectors/selectors';

const pathsToRedirect = [
  '/favourites',
];

export const Header = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(auth.isSignedIn);
  const history = useHistory<History>();
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue('cyan.600', 'cyan.900');

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
    <Box w='100%' position='sticky' bg={bg} py={4} top={0} zIndex={2}>
      <Container maxW='container.xl' display='flex'>
        <Link to='/'>
          <Heading as='h2' size='lg' mr={6}>{text.name}</Heading>
        </Link>
        <InputGroup mr={4}>
          <InputLeftElement
            pointerEvents='none'
            fontSize='1.2em'
            p={2}
          >
            <AiOutlineSearch />
          </InputLeftElement>
          <Input
            placeholder='Search...'
            _placeholder={{ color: 'white' }}
            color='white'
          />
        </InputGroup>
        <Box display='flex' gap={2}>
          {isAuthenticated &&
              navigationConfig.authorized.map((iconConf) => {
                return <NavIcon key={iconConf.ariaLabel} {...iconConf} />;
              })
          }
          {!isAuthenticated &&
              navigationConfig.notAuthorized.map((iconConf) => {
                return <NavIcon key={iconConf.ariaLabel} {...iconConf} />;
              })
          }
          {navigationConfig.renderAnyway.map((iconConf) => {
            return <NavIcon key={iconConf.ariaLabel} {...iconConf} />;
          })}
        </Box>
      </Container>
    </Box>
  );
};
