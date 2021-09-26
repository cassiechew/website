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

export const Anz = ({ windowHeight }: SceneProps) : JSX.Element => (
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
                  ~/.hist/.anz
                </Text>
                <Box>
                  <Heading pl="50px" size="xl">
                    I worked at
                    {' '}
                    <Text display="inline" color={EmphasisText}>$anz_australia</Text>
                    {' '}
                    as an
                    <Text display="inline" color={EmphasisText}> Engineer</Text>
                    .
                    {' '}
                    <Text display="inline" color={EmphasisText}>Designing</Text>
                    {' '}
                    and
                    {' '}
                    <Text
                      display="inline"
                      color={EmphasisText}
                    >
                      Building API micro-service endpoints
                    </Text>
                    , as well as contributing to
                    {' '}
                    <Text display="inline" color={EmphasisText}>CLI testing tools</Text>
                    .
                  </Heading>
                  <Text
                    pl="50px"
                    fontSize={DescText}
                  >
                    $ tech=(golang micro-services APIs
                    gRPC gCloud pubsub serverless CLI)
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
