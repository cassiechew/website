import type { NextPage } from 'next';

import {
  Flex,
  Heading,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Header from '../components/Header';
import { AutoScroll } from '../components/AutoScroll/AutoScroll';
import { MobileNav } from '../containers/Navbar/Mobile/MobileNavDrawer';
import { DesktopNav } from '../containers/Navbar/Web/Navbar';

const Projects: NextPage = () => {
  // const [windowHeight, setWindowHeight] = useState(0);
  const [width, setWindowWidth] = useState(0);
  const { isOpen, onToggle } = useDisclosure();

  const updateDimensions = (): void => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(visualViewport.width);
    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <Flex width="100%" flexDirection="column">
      <Header />
      <DesktopNav width={width} />
      <Flex
        justifyContent="left"
        height="80vh"
        ml="15vw"
      >
        <Flex flexDirection="column">
          <Flex
            flexDirection="column"
            marginTop="20vh"
            marginBottom="20px"
            borderWidth="1px"
            padding="20px"
            width="70vw"
          >
            <Heading size="xl">This Website</Heading>
            <Text>This is a portfolio website showcasing some of the frontend skills I have!</Text>
            <Text>
              Repo:
              {' '}
              <a
                href="https://github.com/cassiechew/website"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#FF0066',
                }}
              >
                here
              </a>
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            marginBottom="25px"
            borderWidth="1px"
            padding="20px"
            width="70vw"
          >
            <Heading size="xl">Zefr</Heading>
            <Text>
              Hosted at
              {' '}
              <a
                href="https://zefr.xyz"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#FF0066',
                }}
              >
                zefr
              </a>
              {' '}
              is a url shortening website writen in NextJs/React with TailwindCss.
            </Text>
            <Text>
              Repo:
              {' '}
              <a
                href="https://github.com/cassiechew/zefr"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#FF0066',
                }}
              >
                here
              </a>
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            marginBottom="25px"
            borderWidth="1px"
            padding="20px"
            width="70vw"
          >
            <Heading size="xl">Rss Reader</Heading>
            <Text>
              While it is not currently hosted, it is a project built to act as an RSS feed reader
              with a relatively simple interface. It is written using; React/NextJs, Graphql,
              TypeScript, Chakra-UI, and Express + Postgres.
            </Text>
            <Text>
              Repo:
              {' '}
              <a
                href="https://github.com/cassiechew/rss-reader"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#FF0066',
                }}
              >
                here
              </a>
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            marginBottom="25px"
            borderWidth="1px"
            padding="20px"
            width="70vw"
          >
            <Heading size="xl">Notion iCal integration</Heading>
            <Text>
              A small, simple overkill server to push iCal data into a notion calendar.
            </Text>
            <Text>
              Repo:
              {' '}
              <a
                href="https://github.com/cassiechew/notion-ical-integration"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#FF0066',
                }}
              >
                here
              </a>
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <MobileNav width={width} isOpen={isOpen} onToggle={onToggle} />
      <AutoScroll />
    </Flex>
  );
};

export default Projects;
