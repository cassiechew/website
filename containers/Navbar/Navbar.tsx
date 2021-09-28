// Components/Navbar/Navbar.tsx

import {
  Flex,
  Box,
  Slide,
  Text,
} from '@chakra-ui/react';

import DarkModeToggle from '../../components/DarkModeToggle';
import To from '../../components/To';

declare type Props = {
  width: number
  drawerProps: {
    isOpen: boolean,
    onToggle: () => void
  }
}

export const Navbar = ({ width, drawerProps } : Props) : JSX.Element => {
  if (width > 1023) {
    return (
      <Box position="absolute" top="1">
        <Flex flexDirection="row" width="98vw">
          <Flex
            height="6"
            alignItems="center"
            justifyContent="left"
            pt={9}
            pl="50px"
            width="10%"
          >
            <Text pr="50px" color="#FF0066" fontSize="2xl">~</Text>
          </Flex>
          <Flex
            flexDirection="row"
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
      </Box>
    );
  }
  // TODO: Add close button. or close on tap end button
  return (
    <>
      <Slide in={drawerProps.isOpen}>
        <Flex
          height="150vh"
          width="100%"
          // backgroundImage="linear-gradient(to left, #FF0066, #F060)"
          justifyContent="right"
          // ml="30vw"
          flexDirection="row"
        >
          <Box
            width="30%"
            height="100%"
            onClick={() => {
              drawerProps.onToggle();
            }}
          />
          <Box
            color="white"
            bg="#FF0066"
            // backgroundImage="linear-gradient(to left, #FF0066, #FF0066FF)"
            height="150vh"
            width="70%"
            justifyContent="right"
            // ml="30%"
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
        </Flex>
      </Slide>
    </>
  );
};
