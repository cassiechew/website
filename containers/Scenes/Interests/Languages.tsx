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
  DescText,
} from '../../../constants/constants';

export const Languages = ({ windowHeight }: SceneProps) : JSX.Element => (
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
                  ~/.profile/languages
                </Text>
                <Box>
                  <Heading pl="50px" size="xl">
                    I also enjoy studying
                    {' '}
                    <Text display="inline" color={EmphasisText}>$languages</Text>
                    {' '}
                    and
                    {' '}
                    <Text display="inline" color={EmphasisText}>$linguistics</Text>
                    . Also attempted to make my own
                    {' '}
                    <Text display="inline" color={EmphasisText}>conlang</Text>
                    .
                  </Heading>
                  <Text
                    pl="50px"
                    fontSize={DescText}
                  >
                    $ locale=(Japanese, Norwegian[Bokmål], Korean, Chinese[Mandarin], French,
                    Russian)
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
            />
          </Timeline>
        </Timeline>
      </Box>
    )}
  </Scene>
);
