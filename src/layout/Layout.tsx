import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <Box display='flex' flexDirection='column' position='relative' minHeight='100vh' overflow='hidden'>
      <Header />
      <Container maxW='container.xl' flexGrow={1}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
