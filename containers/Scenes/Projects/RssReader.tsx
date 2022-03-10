import {
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

export const RssReader = (): JSX.Element => (
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
);
