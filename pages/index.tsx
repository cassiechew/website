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

const typedFramesMobile = keyframes`
  from{width: 0;}
  to{width: 180px;}
`;

const typedFrames = keyframes`
  from{width: 0;}
  to{width: 290px;}
`;

const typeWidth: string[] = ['180px', '290px'];

const Home: NextPage = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const router = useRouter();

  useEffect(() => {
    setWindowHeight(visualViewport.height);
    setWindowWidth(visualViewport.width);
  }, []);

  const animation = `${cursorFrames} infinite 0.75s`;
  const textAnimationMobile = `${typedFramesMobile} 0.75s steps(30,end) 1s 1 normal both`;
  const textAnimation = `${typedFrames} 0.75s steps(30,end) 1s 1 normal both`;
  const headingHeight = { base: '54px', lg: '90px' };

  return (
    <Flex flexDirection="column" height="screen" width="100%">
      <Flex flexDirection="column" justifyContent="center">
        <Header />
        <Navbar />

        <Container ml={{ base: '5', lg: '300' }} justifyContent="center">
          <Flex width={{ base: '90vw', lg: '60vw' }} justifyContent="center" flexDirection="column">
            <Box alignItems="center">
              <Box pt={windowHeight * 0.35}>
                <Flex flexDirection="row" overflow="hidden" height={headingHeight}>
                  <Text id="typed" animation={{ base: textAnimationMobile, lg: textAnimation }} overflow="hidden" fontSize={{ base: '4xl', lg: '6xl' }} color="#FF0066">{'~/readme '}</Text>
                  <Box
                    animation={animation}
                    ml="5px"
                    borderRadius="5px"
                    width={{ base: '36px', lg: '60px' }}
                    height={headingHeight}
                    onClick={() => { router.push('/github'); }}
                  />
                </Flex>
                {' '}
                <Heading pl="50px" size="2xl">Hi! I'm Cassie.</Heading>
                <Text pl="50px" fontSize={{ base: 'md', md: 'lg', lg: '4xl' }}>Full Stack Engineer | Linguist | Gamer</Text>

              </Box>
              <Box className="trigger" />
              <Controller>
                <Box alignItems="center">
                  {/* <Scene triggerElement="trigger" /> */}
                  <Scene
                    duration={windowHeight * 1.5}
                    // triggerHook={0.5}
                    pin
                    triggerElement="trigger"
                    offset={185}
                  >
                    {(progress: number | undefined) => (
                      <Box alignItems="center">
                        <Timeline totalProgress={progress} paused>
                          <Timeline
                            target={(
                              <>
                                <Flex flexDirection="row" overflow="hidden" height={headingHeight}>
                                  <Text fontSize={{ base: '4xl', lg: '6xl' }} color="#FF0066">~/.histrc</Text>
                                </Flex>
                                <Heading pl="50px" size="2xl" mr="0">[[ life && work ]] ; then</Heading>
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
                              // duration={0.1}
                            />
                            <Tween
                              target={1}
                              from={{
                                overflow: 'hidden',
                                height: 48,
                                opacity: 0,
                                width: 0,
                              }}
                              to={{
                                overflow: 'hidden',
                                height: 48,
                                opacity: 1,
                                width: '200%',
                              }}
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
