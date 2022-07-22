import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

const styles = {
  icon: {
    pointerEvents: 'none',
    fontSize: '1.2em',
    p: 2
  },
  input: {
    _placeholder: {
      color: 'white'
    },
    color: 'white'
  }
};

export const SearchBar = () => {
  return (
    <InputGroup mr={4}>
      <InputLeftElement sx={styles.icon}>
        <AiOutlineSearch />
      </InputLeftElement>
      <Input sx={styles.input} placeholder='Search...' />
    </InputGroup>
  );
};
