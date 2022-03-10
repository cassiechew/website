import {
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

export const ThisWebsite = (): JSX.Element => (
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
);
