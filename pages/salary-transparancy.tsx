import { Flex, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import type { NextPage } from 'next';
import Header from '../components/Header';
import { AutoScroll } from '../components/AutoScroll/AutoScroll';
import { MobileNav } from '../containers/Navbar/Mobile/MobileNavDrawer';
import { DesktopNav } from '../containers/Navbar/Web/Navbar';

const SalaryTransparancy: NextPage = () => {
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
    <Flex>
      <Header />
      <DesktopNav width={width} />
      <Flex justifyContent="left" height="80vh" ml="15vw">
        <Flex flexDirection="column" marginBottom="12" />
      </Flex>
      <MobileNav width={width} isOpen={isOpen} onToggle={onToggle} />
      <AutoScroll />
    </Flex>
  );
};

export default SalaryTransparancy;
