import type { NextPage } from 'next';

import {
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Header from '../components/Header';
import { AutoScroll } from '../components/AutoScroll/AutoScroll';
import { MobileNav } from '../containers/Navbar/Mobile/MobileNavDrawer';
import { DesktopNav } from '../containers/Navbar/Web/Navbar';
import { ThisWebsite } from '../containers/Scenes/Projects/ThisWebsite';
import { Zefr } from '../containers/Scenes/Projects/Zefr';
import { RssReader } from '../containers/Scenes/Projects/RssReader';
import { ICalNotion } from '../containers/Scenes/Projects/ICalNotion';

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
      <Flex
        justifyContent="left"
        height="80vh"
        ml="15vw"
      >
        <Flex flexDirection="column" marginBottom="12">
          <ThisWebsite />
          <Zefr />
          <RssReader />
          <ICalNotion />
        </Flex>
      </Flex>
      <MobileNav width={width} isOpen={isOpen} onToggle={onToggle} />
      <AutoScroll />
    </Flex>
  );
};

export default Projects;
