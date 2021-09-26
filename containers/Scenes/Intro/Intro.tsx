import {
  Heading,
  Text,
  Box,
  Flex,
  keyframes,
} from '@chakra-ui/react';

import { useRouter } from 'next/router';
import {
  HeadingText,
  HeadingHeight,
  EmphasisText,
  DescText,
} from '../../../constants/constants';

export const IntroScene = ({ windowHeight }: SceneProps) : JSX.Element => {
  const router = useRouter();

  const cursorFrames = keyframes`
  0% {background-color: transparent;}
  49% {background-color: transparent;}
  50% {background-color: ${EmphasisText};}
`;

  const typedFramesMobile = keyframes`
  from{width: 0;}
  to{width: 145px;}
`;

  const typedFrames = keyframes`
  from{width: 0;}
  to{width: 290px;}
`;

  const animation = `${cursorFrames} infinite 0.75s`;
  const textAnimationMobile = `${typedFramesMobile} 0.75s steps(30,end) 1s 1 normal both`;
  const textAnimation = `${typedFrames} 0.75s steps(30,end) 1s 1 normal both`;

  return (
    <Box pt={windowHeight * 0.35}>
      <Flex flexDirection="row" overflow="hidden" height={HeadingHeight}>
        <Text
          id="typed"
          animation={{ base: textAnimationMobile, lg: textAnimation }}
          overflow="hidden"
          fontSize={HeadingText}
          color={EmphasisText}
        >
          {'~/README '}
        </Text>
        <Box
          animation={animation}
          ml="5px"
          borderRadius="5px"
          width={{ base: '36px', lg: '60px' }}
          height={HeadingHeight}
          onClick={() => { router.push('/github'); }}
        />
      </Flex>
      {' '}
      <Heading pl="50px" size="2xl">Hi! I'm Cassie.</Heading>
      <Text pl="50px" fontSize={DescText}>
        Full Stack Engineer | Linguist | Singer | Occasional Gamer | Full Time Learner
      </Text>
    </Box>
  );
};
