import {
  Heading,
  Text,
  Box,
} from '@chakra-ui/react';
import { Scene } from 'react-scrollmagic';
import {
  Tween, Timeline,
} from 'react-gsap';
import { Power3 } from 'gsap';

import {
  HeadingText,
  HeadingHeight,
  EmphasisText,

} from '../../../constants/constants';

export const Law = ({ windowHeight }: SceneProps) : JSX.Element => (
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
                  ~/.profile/law
                </Text>
                <Box>
                  <Heading pl="50px" size="xl">
                    I am studying
                    {' '}
                    <Text display="inline" color={EmphasisText}>$Law</Text>
                    {' '}
                    and am striving to get a
                    {' '}
                    <Text display="inline" color={EmphasisText}>$JD</Text>
                    {' '}
                    in 2025!
                  </Heading>
                </Box>
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
              to={{
                overflow: 'hidden',
                opacity: 1,
                width: '100%',
              }}
              duration={0.1}
            />
            <Tween
              target={1}
              from={{
                overflow: 'hidden',
                opacity: 0,

              }}
              to={{
                overflow: 'hidden',
                opacity: 1,

              }}
              ease={Power3.easeOut}
            />
          </Timeline>
        </Timeline>
      </Box>
    )}
  </Scene>
);
