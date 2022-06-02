import React from 'react';
import { Box, Container, Divider } from '@chakra-ui/react';
import { text } from '../constants/text';

export const Footer = () => {
  return (
    <Container maxW='container.xl' textAlign='center'>
      <Divider />
      <Box p={8}>
        {text.createdBy}
      </Box>
    </Container>
  );
};
