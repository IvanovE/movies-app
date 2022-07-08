import React from 'react';
import { Container, Flex } from '@chakra-ui/react';
import { Header } from './Header';
import { Footer } from './Footer';

const sx = {
  container: {
    flexDirection: 'column',
    position: 'relative',
    minHeight: '100vh'
  },
  content: {
    flexGrow: 1,
    marginTop: '2rem'
  }
};

export const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <Flex sx={sx.container}>
      <Header />
      <Container maxW='container.xl' sx={sx.content}>
        {children}
      </Container>
      <Footer />
    </Flex>
  );
};
