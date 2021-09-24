// Components/Navbar/Navbar.tsx

import { Flex } from '@chakra-ui/react';
import To from '../../components/To';

import Bar from '../../components/Bar';

declare type Props = {
    id: string,
}

export const Navbar = () : JSX.Element => (
  <Flex
    height="6"
    alignItems="center"
    justifyContent="right"
    pt={9}
  >
    <To name="~$ me" to="" />
    <To name="--work" to="resume" />
    <To name="--blog" to="blog" />
  </Flex>
);
