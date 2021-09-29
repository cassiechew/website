// Pages/index.tsx

import type { NextPage } from 'next';
import {
  Flex,
  useDisclosure,
} from '@chakra-ui/react';

import React, {
  useEffect, useState,
} from 'react';

import Header from '../components/Header';
import MainContent from '../containers/MainContent';
import { MobileNav } from '../containers/Navbar/Mobile/MobileNavDrawer';
import { DesktopNav } from '../containers/Navbar/Web/Navbar';

const Home: NextPage = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [width, setWindowWidth] = useState(0);
  const { isOpen, onToggle } = useDisclosure();

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
      <DesktopNav width={width} />
      <MainContent windowHeight={windowHeight} />
      <MobileNav width={width} isOpen={isOpen} onToggle={onToggle} />
    </Flex>
  );
};

export default Home;
