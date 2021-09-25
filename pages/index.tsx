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
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';

import { Controller, Scene } from 'react-scrollmagic';
import {
  Tween, Timeline,
} from 'react-gsap';

import { Power3 } from 'gsap';

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
// import To from '../components/To';

// import AboutMe from '../containers/AboutMe';
import Navbar from '../containers/Navbar';
// import Footer from '../containers/Footer';

// Import animate from '../util/animations';

// const typeWidth: string[] = ['180px', '290px'];

const Home: NextPage = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  // const [windowWidth, setWindowWidth] = useState(0);

  const router = useRouter();

  useEffect(() => {
    setWindowHeight(visualViewport.height);
    // setWindowWidth(visualViewport.width);
  }, []);

  const headingHeight = { base: '54px', lg: '90px' };
  const bodyText = { base: 'md', md: 'lg', lg: '4xl' };
  const descText = { base: 'sm', md: 'md', lg: '2xl' };
  const emphasisText = '#FF0066';

  const cursorFrames = keyframes`
  0% {background-color: transparent;}
  49% {background-color: transparent;}
  50% {background-color: ${emphasisText};}
`;

  const typedFramesMobile = keyframes`
  from{width: 0;}
  to{width: 180px;}
`;

  const typedFrames = keyframes`
  from{width: 0;}
  to{width: 290px;}
`;

  const animation = `${cursorFrames} infinite 0.75s`;
  const textAnimationMobile = `${typedFramesMobile} 0.75s steps(30,end) 1s 1 normal both`;
  const textAnimation = `${typedFrames} 0.75s steps(30,end) 1s 1 normal both`;

  return (
    <Flex flexDirection="column" height="screen" width="100%">
      <Flex flexDirection="column" justifyContent="center">
        <Header />
        <Navbar />

        <Container ml={{ base: '5', lg: '300' }} justifyContent="center">
          <Flex width={{ base: '90vw', lg: '60vw' }} justifyContent="center" flexDirection="column">

            <Box position="fixed" top="87vh" left="90vw" width="100%">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                To Top
              </button>
            </Box>
            <Box position="fixed" top="90vh" left="90vw" width="100%">
              <button
                type="button"
                onClick={() => {
                  const pageBottom = document.querySelector('#bottom');
                  if (pageBottom !== null) { pageBottom.scrollIntoView({ behavior: 'smooth' }); }
                }}
              >
                To Bottom
              </button>
            </Box>
            <Box alignItems="center">
              <Box pt={windowHeight * 0.35}>
                <Flex flexDirection="row" overflow="hidden" height={headingHeight}>
                  <Text
                    id="typed"
                    animation={{ base: textAnimationMobile, lg: textAnimation }}
                    overflow="hidden"
                    fontSize={{ base: '4xl', lg: '6xl' }}
                    color={emphasisText}
                  >
                    {'~/README '}
                  </Text>
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
                <Text pl="50px" fontSize={bodyText}>Full Stack Engineer | Linguist | Gamer</Text>

              </Box>
              <Box className="trigger" position="fixed" />
              <Controller>
                <Box alignItems="center">
                  <Scene
                    duration={windowHeight}
                    pin
                    // triggerElement=".trigger"
                    offset={185}
                  >
                    {(progress: number | undefined) => (
                      <Box alignItems="center">
                        <Timeline totalProgress={progress} paused>
                          <Timeline
                            target={(
                              <>
                                <Flex flexDirection="row" overflow="hidden" height={headingHeight}>
                                  <Text
                                    fontSize={{ base: '4xl', lg: '6xl' }}
                                    color={emphasisText}
                                  >
                                    ~/.hist

                                  </Text>
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
                                height: 50,
                                opacity: 0,
                                width: 0,
                              }}
                              to={{
                                overflow: 'hidden',
                                height: 50,
                                opacity: 1,
                                width: '100%',
                              }}
                              ease={Power3.easeIn}
                            />
                          </Timeline>
                        </Timeline>
                      </Box>
                    )}
                  </Scene>
                  <Scene
                    duration={windowHeight}
                    pin
                    offset={155}
                  >
                    {(progress: number | undefined) => (
                      <Box alignItems="center">
                        <Timeline totalProgress={progress} paused>
                          <Timeline
                            target={(
                              <>
                                <Flex flexDirection="row" overflow="hidden" height={headingHeight}>
                                  <Text
                                    fontSize={{ base: '4xl', lg: '6xl' }}
                                    color={emphasisText}
                                  >
                                    ~/.hist/.papercut
                                  </Text>
                                </Flex>
                              </>
                            )}
                          >
                            <Tween
                              from={{
                                overflow: 'hidden',
                                opacity: 0,
                                width: 0,
                              }}
                            />
                            <Tween to={{
                              overflow: 'hidden',
                              opacity: 1,
                              width: '100%',
                            }}
                            />
                            <Tween to={{ opacity: 0 }} />
                          </Timeline>
                        </Timeline>
                      </Box>
                    )}
                  </Scene>
                  <Scene
                    duration={windowHeight / 2}
                    pin
                    offset={145}
                  >
                    {(progress: number | undefined) => (
                      <Box alignItems="center">
                        <Timeline totalProgress={progress} paused>
                          <Timeline
                            target={(
                              <>
                                <Heading size="xl">
                                  I'm currently working at
                                  {' '}
                                  <Text display="inline" color={emphasisText}>$papercut_software</Text>
                                  {' '}
                                  as an
                                  <Text display="inline" color={emphasisText}> Associate Product Engineer</Text>
                                  ,
                                  {' '}
                                  <Text display="inline" color={emphasisText}>developing</Text>
                                  {' '}
                                  and
                                  {' '}
                                  <Text display="inline" color={emphasisText}>improving</Text>
                                  {' '}
                                  solutions and processes.
                                </Heading>
                                <Text pl="50px" fontSize={descText}>$ tech=(typescript golang bash automation)</Text>
                              </>
                            )}
                          >
                            <Tween
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
                  <Scene
                    duration={windowHeight}
                    pin
                    offset={155}
                  >
                    {(progress: number | undefined) => (
                      <Box alignItems="center">
                        <Timeline totalProgress={progress} paused>
                          <Timeline
                            target={(
                              <>
                                <Flex flexDirection="row" overflow="hidden" height={headingHeight}>
                                  <Text
                                    fontSize={{ base: '4xl', lg: '6xl' }}
                                    color={emphasisText}
                                  >
                                    ~/.hist/.anz
                                  </Text>
                                </Flex>
                              </>
                            )}
                          >
                            <Tween
                              from={{
                                overflow: 'hidden',
                                opacity: 0,
                                width: 0,
                              }}
                            />
                            <Tween to={{
                              overflow: 'hidden',
                              opacity: 1,
                              width: '100%',
                            }}
                            />
                            <Tween to={{ opacity: 0 }} />
                          </Timeline>
                        </Timeline>
                      </Box>
                    )}
                  </Scene>
                  <Scene
                    duration={windowHeight / 2}
                    pin
                    offset={145}
                  >
                    {(progress: number | undefined) => (
                      <Box alignItems="center">
                        <Timeline totalProgress={progress} paused>
                          <Timeline
                            target={(
                              <>
                                <Heading size="xl">
                                  I worked at
                                  {' '}
                                  <Text display="inline" color={emphasisText}>$anz_australia</Text>
                                  {' '}
                                  as an
                                  <Text display="inline" color={emphasisText}> Engineer</Text>
                                  .
                                  {' '}
                                  <Text display="inline" color={emphasisText}>Designing</Text>
                                  {' '}
                                  and
                                  {' '}
                                  <Text
                                    display="inline"
                                    color={emphasisText}
                                  >
                                    Building API micro-service endpoints
                                  </Text>
                                  , as well as contributing to
                                  {' '}
                                  <Text display="inline" color={emphasisText}>CLI testing tools</Text>
                                  .
                                </Heading>
                                <Text
                                  pl="50px"
                                  fontSize={descText}
                                >
                                  $ tech=(golang micro-services APIs
                                  gRPC gCloud pubsub serverless CLI)
                                </Text>
                              </>
                            )}
                          >
                            <Tween
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
                  <Scene
                    duration={windowHeight}
                    pin
                    offset={155}
                  >
                    {(progress: number | undefined) => (
                      <Box alignItems="center">
                        <Timeline totalProgress={progress} paused>
                          <Timeline
                            target={(
                              <>
                                <Flex flexDirection="column">
                                  <Text
                                    fontSize={{ base: '4xl', lg: '6xl' }}
                                    color={emphasisText}
                                  >
                                    ~/.config
                                  </Text>
                                  <Text pl="50px" fontSize={bodyText}>NextJS, React, Chakra-ui, Scrollmagic, Gsap.</Text>
                                </Flex>
                              </>
                            )}
                          >
                            <Tween
                              from={{
                                overflow: 'hidden',
                                opacity: 0,
                                width: 0,
                              }}
                            />
                            <Tween to={{
                              overflow: 'hidden',
                              opacity: 1,
                              width: '100%',
                            }}
                            />
                            <Tween to={{ opacity: 0 }} />
                          </Timeline>
                        </Timeline>
                      </Box>
                    )}
                  </Scene>
                  <Scene
                    duration={windowHeight}
                    pin
                    offset={155}
                  >
                    {(progress: number | undefined) => (
                      <Box alignItems="center">
                        <Timeline totalProgress={progress} paused>
                          <Timeline
                            target={(
                              <>
                                <Flex flexDirection="row" overflow="hidden" height={headingHeight}>
                                  <Text
                                    fontSize={{ base: '4xl', lg: '6xl' }}
                                    color={emphasisText}
                                  >
                                    ~/.contact
                                  </Text>
                                </Flex>
                              </>
                            )}
                          >
                            <Tween
                              from={{
                                overflow: 'hidden',
                                opacity: 0,
                                width: 0,
                              }}
                            />
                            <Tween to={{
                              overflow: 'hidden',
                              opacity: 1,
                              width: '100%',
                            }}
                            />
                            <Tween to={{ opacity: 0 }} />
                          </Timeline>
                        </Timeline>
                      </Box>
                    )}
                  </Scene>
                  <Scene
                    duration={windowHeight / 2}
                    pin
                    offset={145}
                  >
                    {(progress: number | undefined) => (
                      <Box alignItems="center">
                        <Timeline totalProgress={progress} paused>
                          <Timeline
                            target={(
                              <>
                                <Flex height="80vh" bg="black" p="10" borderRadius="10px" flexDirection="column">
                                  <FormLabel color="#FF0066">~$ ./.contact</FormLabel>
                                  <form>
                                    <FormControl id="name">
                                      <FormLabel color={emphasisText}>
                                        ~$ What is your name?
                                      </FormLabel>
                                      <Input color="white" _focus={{ color: '#FF0066' }} type="text" borderColor="transparent" />
                                    </FormControl>
                                    <FormControl id="email">
                                      <FormLabel color={emphasisText}>
                                        ~$ What is your email?
                                      </FormLabel>
                                      <Input color="white" _focus={{ color: '#FF0066' }} type="text" borderColor="transparent" />
                                    </FormControl>
                                    <FormControl id="message">
                                      <FormLabel color={emphasisText}>
                                        ~$ What do you want to say?
                                      </FormLabel>
                                      <Textarea color="white" _focus={{ color: '#FF0066' }} resize="none" rows={10} cols={80} type="text" borderColor="transparent" />
                                    </FormControl>

                                  </form>

                                </Flex>
                              </>
                            )}
                          >
                            <Tween
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
                  <Scene duration="80" pin>
                    <Box id="bottom" />
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

export default Home;
