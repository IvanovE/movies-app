import React from 'react';
import { Container, Flex } from '@chakra-ui/react';
import { Header } from './Header';
import { Footer } from './Footer';

const styles = {
  container: {
    flexDirection: 'column',
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden'
  },
  content: {
    flexGrow: 1,
    marginTop: '2rem'
  }
};

export const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <Flex sx={styles.container}>
      <Header />
      <Container maxW='container.xl' sx={styles.content}>
        {children}
      </Container>
      <Footer />
    </Flex>
  );
};
