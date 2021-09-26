// Components/Navbar/Navbar.tsx

import {
  Flex, Text,
} from '@chakra-ui/react';

import DarkModeToggle from '../../components/DarkModeToggle';
import To from '../../components/To';

export const Navbar = () : JSX.Element => (
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
      <To name="~$ me" to="" />
      <To name="--projects" to="projects" />
      <To name="--blog" to="blog" />
      <To name="--git" to="github" />
      <DarkModeToggle />
    </Flex>
  </Flex>

);
