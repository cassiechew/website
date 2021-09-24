// Pages/index.tsx

import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  Flex,
  Container,
  Heading,
  Text,
  Box,
  keyframes,
} from '@chakra-ui/react';

import { Controller, Scene } from 'react-scrollmagic';
import {
  Tween, Timeline,
} from 'react-gsap';

import { Power3 } from 'gsap';

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import To from '../components/To';

import AboutMe from '../containers/AboutMe';
import Navbar from '../containers/Navbar';
import Footer from '../containers/Footer';

// Import animate from '../util/animations';

const cursorFrames = keyframes`
  0% {background-color: transparent;}
  49% {background-color: transparent;}
  50% {background-color: #FF0066;}
`;

const Home: NextPage = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const router = useRouter();

  useEffect(() => {
    setWindowHeight(visualViewport.height);
    setWindowWidth(visualViewport.width);
  }, []);

  const animation = `${cursorFrames} infinite 1s`;

  return (
    <Flex flexDirection="column" height="screen" width="100%">
      <Flex flexDirection="column" justifyContent="center">
        <Header />
        <Navbar />

        <Container justifyContent="center">
          <Flex width="60vw" justifyContent="center" flexDirection="column">
            <Box alignItems="center">
              <Box pt={windowHeight / 2.5}>
                <Text fontFamily="monospace" fontSize="6xl" color="#FF0066">{'<who>'}</Text>
                <Heading fontFamily="monospace" pl="50px" size="3xl">Hi! I'm Cassie.</Heading>
                <Text fontFamily="monospace" pl="50px" fontSize="4xl">Full Stack Engineer.</Text>
                <Flex flexDirection="row">
                  <Text fontFamily="monospace" fontSize="6xl" color="#FF0066">{'</who> '}</Text>
                  <Box
                    animation={animation}
                    ml="5px"
                    borderRadius="5px"
                    width="60px"
                    height="auto"
                    onClick={() => { router.push('/github'); }}
                  />

                </Flex>
              </Box>
              <Box className="trigger" />
              <Controller>
                <Box alignItems="center">
                  {/* <Scene triggerElement="trigger" /> */}
                  <Scene
                    // duration={windowHeight * 2.5}
                    // triggerHook={0.5}
                    pin
                    triggerElement="trigger"
                    offset={100}
                  >
                    {(progress: number | undefined) => (
                      <Box alignItems="center">
                        <Timeline totalProgress={progress} paused>
                          <Timeline
                            target={(
                              <Box>
                                <Text className="topTag" fontSize="6xl" color="#FF0066">{'<cv>'}</Text>
                                <Heading className="content" pl="50px" size="3xl">Life && work</Heading>
                                {/* <Text pl="50px" fontSize="4xl">Full Stack Engineer.</Text> */}
                                <Text className="topTag" fontSize="6xl" color="#FF0066">{'</cv>'}</Text>
                              </Box>
                            )}
                          >
                            <Tween
                              // target="topTag"
                              from={{
                                yPercent: -50,
                                // autoAlpha: 0,
                                rotationY: 90,
                                // transformOrigin: '50% 50% -100px',
                                ease: Power3.easeOut,
                              }}
                              to={{
                                // autoAlpha: 0,
                                rotationY: 0,
                                yPercent: -100,
                              }}
                              duration={0.1}
                            />
                          </Timeline>
                        </Timeline>
                      </Box>
                    )}
                  </Scene>
                </Box>
              </Controller>
            </Box>
          </Flex>
        </Container>
      </Flex>
    </Flex>
  );
};

// {/* <div className="flex flex-col justify-center">
//                 <div className="flex justify-center">
//                     <AboutMe />
//                 </div>
//                 <br />
//                 <div>
//                     <ul>
//                         <To name="github" />
//                     </ul>
//                 </div>
//                 <br />
//             </div> */}

export default Home;
