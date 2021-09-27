import { Flex } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from 'react';

export const AutoScroll = (): JSX.Element => {
  const [chevron, setChevron] = useState(<></>);

  useScrollPosition(({ currPos }) => {
    if (currPos.y < 0) {
      setChevron(
        <ChevronUpIcon
          position="fixed"
          anchor="left"
          bottom="5vh"
          right="5vw"
          h={8}
          w={8}
        />,
      );
    } else {
      setChevron(<></>);
    }
  });

  return (
    <Flex
      justifyContent="right"
    >
      <button
        type="button"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        {chevron}
      </button>
    </Flex>
  );
};
