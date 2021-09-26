// Pages/index.tsx

import type { NextPage } from 'next';
import {
  Flex,
  Container,
  Box,
} from '@chakra-ui/react';

import React, {
  useEffect, useState,
} from 'react';

import Header from '../components/Header';
import Navbar from '../containers/Navbar';
import SceneController, { IntroScene } from '../containers/Scenes/SceneController';
import { AutoScroll } from '../components/AutoScroll/AutoScroll';

const Home: NextPage = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(visualViewport.height);
  }, []);

  return (
    <Flex flexDirection="column" height="screen" width="100%" justifyContent="center">
      <Header />
      <Navbar />
      <Container
        ml={{
          base: '5',
          sm: '50',
          md: '150',
          lg: '300',
        }}
        justifyContent="center"
      >
        <Flex width={{ base: '100vw', lg: '60vw' }} justifyContent="center" flexDirection="column">
          {AutoScroll()}
          <Box alignItems="center">
            {IntroScene({ windowHeight })}
            <Box className="trigger" position="fixed" />
            {SceneController({ windowHeight })}
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Home;
