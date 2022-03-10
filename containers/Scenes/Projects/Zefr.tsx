import {
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

export const Zefr = (): JSX.Element => (
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
);
