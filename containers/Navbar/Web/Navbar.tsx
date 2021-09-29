// Components/Navbar/Navbar.tsx

import {
  Flex,
  Box,
  Text,
} from '@chakra-ui/react';

import DarkModeToggle from '../../../components/DarkModeToggle';
import To from '../../../components/To';
import { DesktopWidth } from '../../../constants/constants';

declare type Props = {
  width: number
}

const Navbar = () : JSX.Element => (
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

export const DesktopNav = ({ width }: Props): JSX.Element => (
  (width > DesktopWidth) ? <Navbar /> : <></>);
