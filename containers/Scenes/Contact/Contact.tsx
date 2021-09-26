import {
  Flex,
  Text,
  Box,
} from '@chakra-ui/react';
import { Scene } from 'react-scrollmagic';
import {
  Tween, Timeline,
} from 'react-gsap';

import ContactForm from '../../ContactForm';
import {
  HeadingText,
  EmphasisText,
} from '../../../constants/constants';

export const ContactScene = ({ windowHeight }: SceneProps) : JSX.Element => (
  <Scene
    duration={windowHeight / 2}
    pin
    offset={315}
  >
    {(progress: number | undefined) => (
      <Box alignItems="center">
        <Timeline totalProgress={progress} paused>
          <Timeline
            target={(
              <>
                <Flex flexDirection="column">
                  <Text
                    fontSize={HeadingText}
                    color={EmphasisText}
                  >
                    ~/.contact
                  </Text>
                  {/* <Box id="bottom" height="0px" /> */}
                  <ContactForm emphasisText={EmphasisText} />
                </Flex>
              </>
                            )}
          >
            <Tween
              from={{
                overflow: 'hidden',
                opacity: 0,
              }}
            />
            <Tween
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
