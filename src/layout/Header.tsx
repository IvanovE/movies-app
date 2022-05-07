import React from 'react';
import {
  Box,
  Container,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Tooltip,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { RiPlayList2Fill } from 'react-icons/ri';
import { GoSignIn } from 'react-icons/go';
import { AiOutlineSearch } from 'react-icons/ai';
import { text } from '../constants/constants';

export const Header = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue('cyan.600', 'cyan.900');

  return (
    <Box w='100%' bg={bg} py={4} position='sticky' top={0}>
      <Container maxW='container.xl' display='flex' justifyContent='space-between'>
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
          <Tooltip label={text.movies}>
            <Link to='/movies'>
              <IconButton
                aria-label='movies'
                bg={bg}
                icon={<RiPlayList2Fill />} />
            </Link>
          </Tooltip>
          <Tooltip label={text.favourites}>
            <Link to='/favourites'>
              <IconButton
                aria-label='favourites'
                bg={bg}
                icon={<MdFavorite />} />
            </Link>
          </Tooltip>
          <Tooltip label={text.sign}>
            <Link to='/sign'>
              <IconButton
                aria-label='sign'
                bg={bg}
                icon={<GoSignIn />} />
            </Link>
          </Tooltip>
          <Tooltip label={text.colorMode}>
            <IconButton
              aria-label='color-mode'
              bg={bg}
              icon={<SwitchIcon />}
              onClick={toggleColorMode}
            />
          </Tooltip>
        </Box>
      </Container>
    </Box>
  );
};
