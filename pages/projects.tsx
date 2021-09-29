import type { NextPage } from 'next';

import {
  Flex,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Header from '../components/Header';
import { AutoScroll } from '../components/AutoScroll/AutoScroll';
import { MobileNav } from '../containers/Navbar/Mobile/MobileNavDrawer';
import { DesktopNav } from '../containers/Navbar/Web/Navbar';

const Projects: NextPage = () => {
  // const [windowHeight, setWindowHeight] = useState(0);
  const [width, setWindowWidth] = useState(0);
  const { isOpen, onToggle } = useDisclosure();

  const updateDimensions = (): void => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(visualViewport.width);
    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <Flex width="100%" flexDirection="column">
      <Header />
      <DesktopNav width={width} />
      <Flex justifyContent="center" alignItems="center" height="80vh">
        <Heading>Under Construction</Heading>
      </Flex>
      <MobileNav width={width} isOpen={isOpen} onToggle={onToggle} />
      <AutoScroll />

    </Flex>
  );
};

export default Projects;
