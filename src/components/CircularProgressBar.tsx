import React from 'react';
import {
  Flex,
  CircularProgress,
  CircularProgressLabel,
  Text
} from '@chakra-ui/react';

type PropTypes = {
  value: number
  text: string
  color: string
  size: string
}

const styles = {
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export const CircularProgressBar = ({ value, text, color, size }: PropTypes) => {
  return (
    <Flex sx={styles.container}>
      <CircularProgress value={value} color={color} size={size}>
        <CircularProgressLabel>{value}%</CircularProgressLabel>
      </CircularProgress>
      <Text fontSize='3xl'>
        {text}
      </Text>
    </Flex>
  );
};
