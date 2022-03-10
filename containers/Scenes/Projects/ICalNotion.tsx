import {
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

export const ICalNotion = (): JSX.Element => (
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
);
