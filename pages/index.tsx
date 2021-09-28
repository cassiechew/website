// Pages/index.tsx

import type { NextPage } from 'next';
import {
  Flex,
  Container,
  Box,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
} from '@chakra-ui/icons';

import React, {
  useEffect, useState,
} from 'react';

import Header from '../components/Header';
import Navbar from '../containers/Navbar';
import SceneController, { IntroScene } from '../containers/Scenes/SceneController';
import { AutoScroll } from '../components/AutoScroll/AutoScroll';

const Home: NextPage = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [width, setWindowWidth] = useState(0);
  const { isOpen, onToggle } = useDisclosure();

  const mobileMenuToggleButton = (): JSX.Element => {
    if (width < 1023) {
      return (
        <Button
          userSelect="none"
          _focus={{ outline: 'none' }}
          id="mobile-nav-button"
          onClick={onToggle}
          position="absolute"
          top="3vh"
        >
          <HamburgerIcon userSelect="none" h={8} w={8} />
        </Button>
      );
    } return <></>;
  };

  const updateDimensions = (): void => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowHeight(visualViewport.height);
    setWindowWidth(visualViewport.width);
    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <Flex flexDirection="column" height="screen" width="100%" justifyContent="center">
      <Header />
      <Flex
        anchor="right"
        pt="3vh"
        pl="90vw"
      >
        {mobileMenuToggleButton()}
      </Flex>
      <Container
        ml={{
          base: '5px', sm: '5%', md: '15%', lg: '20%', '2xl': '30%',
        }}
        justifyContent="center"
      >
        <Flex width={{ base: '98vw', lg: '60vw' }} justifyContent="center" flexDirection="column">
          {AutoScroll()}
          <Box alignItems="center">
            {IntroScene({ windowHeight })}
            <Box className="trigger" position="fixed" />
            {SceneController({ windowHeight })}
          </Box>
        </Flex>
      </Container>
      <Navbar width={width} drawerProps={{ isOpen, onToggle }} />
    </Flex>
  );
};

export default Home;
