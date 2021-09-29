import {
  Flex,
  Container,
  Box,
} from '@chakra-ui/react';

import SceneController, { IntroScene } from '../Scenes/SceneController';
import { AutoScroll } from '../../components/AutoScroll/AutoScroll';

declare type Props = {
    windowHeight: number
}

export const MainContent = ({ windowHeight }: Props): JSX.Element => (
  <Container
    ml={{
      base: '5px', sm: '5%', md: '15%', lg: '20%', '2xl': '30%',
    }}
    justifyContent="center"
  >
    <Flex width={{ base: '98vw', lg: '60vw' }} justifyContent="center" flexDirection="column">
      <Box alignItems="center">
        {IntroScene({ windowHeight })}
        <Box className="trigger" position="fixed" />
        {SceneController({ windowHeight })}
      </Box>
    </Flex>
    {AutoScroll()}

  </Container>
);
