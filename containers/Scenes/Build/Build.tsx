import {
  Heading,
  Text,
  Box,
} from '@chakra-ui/react';
import { Scene } from 'react-scrollmagic';
import {
  Tween, Timeline,
} from 'react-gsap';

import {
  HeadingText,
  HeadingHeight,
  EmphasisText,
} from '../../../constants/constants';

export const BuildScene = ({ windowHeight }: SceneProps) : JSX.Element => (
  <Scene
    duration={windowHeight / 2}
    pin
    offset={155}
  >
    {(progress: number | undefined) => (
      <Box alignItems="center">
        <Timeline totalProgress={progress} paused>
          <Timeline
            target={(
              <>
                <Text
                  fontSize={HeadingText}
                  color={EmphasisText}
                  height={HeadingHeight}
                >
                  ~/.build
                </Text>
                <Heading pl="50px" size="xl">NextJS, React, Chakra-ui, Scrollmagic, Gsap.</Heading>
              </>
            )}
          >
            <Tween
              target={0}
              from={{
                overflow: 'hidden',
                opacity: 0,
                width: 0,
              }}
            />
            <Tween
              target={0}
              to={{
                overflow: 'hidden',
                opacity: 1,
                width: '100%',
              }}
            />
            <Tween
              target={1}
              from={{
                overflow: 'hidden',
                opacity: 0,
              }}
            />
            <Tween
              target={1}
              to={{
                overflow: 'hidden',
                opacity: 1,
              }}
            />
          </Timeline>
        </Timeline>
      </Box>
    )}
  </Scene>
);
