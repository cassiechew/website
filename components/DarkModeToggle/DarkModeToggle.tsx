import {
  useColorMode, LinkBox, Text,
} from '@chakra-ui/react';

declare type props = {
    upper?: boolean,
    inactiveColor: string,
    prefix?: string
}

const capitalizeFirstLetter = (string: string, upper: boolean): string => (
  (upper) ? string.charAt(0).toUpperCase() + string.slice(1) : string
);

export const DarkModeToggle = ({ upper = false, inactiveColor, prefix } : props) : JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark : boolean = colorMode === 'dark';
  const colorText = (): JSX.Element => ((isDark) ? (
    <Text
      pr="50px"
      color={inactiveColor}
      font="monospace"
      fontSize="2xl"
      userSelect="none"
    >
      {prefix}
      {capitalizeFirstLetter('light', upper)}
    </Text>
  ) : (
    <Text
      pr="50px"
      color={inactiveColor}
      font="monospace"
      fontSize="2xl"
      userSelect="none"
    >
      {prefix}
      {capitalizeFirstLetter('dark', upper)}
      &nbsp;
    </Text>
  ));

  return (
    <LinkBox cursor="pointer" onClick={toggleColorMode}>
      {colorText()}
    </LinkBox>
  );
};

DarkModeToggle.defaultProps = {
  upper: false,
  prefix: '',
};
