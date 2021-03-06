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
  DescText,
} from '../../../constants/constants';

export const Other = ({ windowHeight }: SceneProps) : JSX.Element => (
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
                  ~/.profile/etc
                </Text>
                <Box>
                  <Heading pl="50px" size="xl">
                    Also enjoy
                    {' '}
                    <Text display="inline" color={EmphasisText}>cooking</Text>
                    {', '}
                    <Text display="inline" color={EmphasisText}>singing</Text>
                    , and
                    {' '}
                    <Text display="inline" color={EmphasisText}>dance</Text>
                    .
                  </Heading>
                  <Text
                    pl="50px"
                    fontSize={DescText}
                  >
                    $ other=(Gaming, Music, Tech, Theorycrafting)
                  </Text>
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
