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

export const Doorsteps = ({ windowHeight }: SceneProps) : JSX.Element => (
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
                  ~/.hist/.doorsteps
                </Text>
                <Box>
                  <Heading pl="50px" size="xl">
                    I worked at
                    {' '}
                    <Text display="inline" color={EmphasisText}>$doorsteps</Text>
                    {' '}
                    as an
                    <Text display="inline" color={EmphasisText}> Engineer</Text>
                    .
                    {' '}
                    <Text display="inline" color={EmphasisText}>Designing</Text>
                    {' '}
                    ,
                    {' '}
                    <Text
                      display="inline"
                      color={EmphasisText}
                    >
                      Building
                    </Text>
                    ,
                    {' '}
                    <Text
                      display="inline"
                      color={EmphasisText}
                    >
                      Maintaining
                    </Text>
                    websites and web applications.
                  </Heading>
                  <Text
                    pl="50px"
                    fontSize={DescText}
                  >
                    $ tech=(typescript angularjs docker bash gatsbyjs react)
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
