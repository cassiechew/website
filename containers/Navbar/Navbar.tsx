// Components/Navbar/Navbar.tsx

import {
  Flex,
  Box,
  Slide,
  Text,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
} from '@chakra-ui/icons';

import DarkModeToggle from '../../components/DarkModeToggle';
import To from '../../components/To';

declare type Props = {
  width: number
}

export const Navbar = ({ width } : Props) : JSX.Element => {
  const { isOpen, onToggle } = useDisclosure();

  if (width > 1023) {
    return (
      <Flex flexDirection="row" width="100%">
        <Flex
          height="6"
          alignItems="center"
          justifyContent="left"
          pt={9}
          pl="50px"
        >
          <Text pr="50px" color="#FF0066" fontSize="2xl">~</Text>
        </Flex>
        <Flex
          flexDirection={{ base: 'column', lg: 'row' }}
          height="6"
          alignItems="center"
          justifyContent="right"
          pt={9}
          width="100%"
        >
          <To name="~$ me" to="" inactiveColor="gray.500" />
          <To name="--projects" to="projects" inactiveColor="gray.500" />
          <To name="--blog" to="blog" inactiveColor="gray.500" />
          <To name="--git" to="github" inactiveColor="gray.500" />
          <DarkModeToggle inactiveColor="gray.500" prefix="--" />
        </Flex>
      </Flex>
    );
  }
  return (
    <>
      <Flex
        anchor="right"
        pt="3vh"
        pl="90vw"
      >
        <Button
          userSelect="none"
          _focus={{ outline: 'none' }}
          id="mobile-nav-button"
          zIndex={1000}
          onClick={onToggle}
          position="absolute"
          top="2vh"
        >
          <HamburgerIcon userSelect="none" h={8} w={8} />
        </Button>
      </Flex>
      <Slide in={isOpen}>
        <Box
          color="white"
          height="150vh"
          width="100vh"
          // backgroundImage="linear-gradient(to left, #FF0066, #F060)"
          justifyContent="right"
          pl="30%"
          zIndex="1000 !important"
        >
          <Box
            color="white"
            bg="#FF0066"
            // backgroundImage="linear-gradient(to left, #FF0066, #FF0066FF)"
            height="150vh"
            width="70%"
            justifyContent="right"
            zIndex="1001 !important"
          >
            <Box
              zIndex="1002 !important"
              pt="20%"
              pl="20px"
            >
              <To name="Me" to="" activeColor="white" inactiveColor="white" />
              <br />
              <To name="Projects" to="projects" activeColor="white" inactiveColor="white" />
              <br />
              <To name="Blog" to="blog" activeColor="white" inactiveColor="white" />
              <br />
              <To name="Git" to="github" activeColor="white" inactiveColor="white" />
              <br />
              <DarkModeToggle inactiveColor="white" upper />
            </Box>
          </Box>
        </Box>
      </Slide>
    </>
  );
};
