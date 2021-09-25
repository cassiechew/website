import {
  useColorMode, LinkBox, Text,
} from '@chakra-ui/react';

export const DarkModeToggle = () : JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark : boolean = colorMode === 'dark';
  const colorText = (): JSX.Element => ((isDark) ? (
    <Text
      pr="50px"
      color="gray.500"
      font="monospace"
      fontSize="2xl"
      userSelect="none"
    >
      --dark&nbsp;
    </Text>
  ) : (
    <Text
      pr="50px"
      color="gray.500"
      font="monospace"
      fontSize="2xl"
      userSelect="none"
    >
      --light
    </Text>
  ));

  return (
    <LinkBox onClick={toggleColorMode}>
      {colorText()}
    </LinkBox>
  );
};
