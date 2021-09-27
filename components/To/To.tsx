// Components/ALink/ALink.tsx

import {
  LinkBox,
  // LinkOverlay,
  Text,
} from '@chakra-ui/react';
// import { mode } from '@chakra-ui/theme-tools';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { EmphasisText } from '../../constants/constants';

declare type Props = {
    name : string,
    to: string,
    inactiveColor: string,
    activeColor?: string,
}

export const To = ({
  name, to, inactiveColor, activeColor,
} : Props) : JSX.Element => {
  const router = useRouter();

  const color = router.pathname === `/${to}` ? (
    <Text
      pr="50px"
      color={activeColor}
      fontSize="2xl"
      font="monospace"
    >
      {name}
    </Text>
  ) : (
    <Text
      className=""
      pr="50px"
      color={inactiveColor}
      fontSize="2xl"
      font="monospace"
    >
      {name}
    </Text>
  );
  return (
    <>
      <LinkBox>
        <Link href={`/${to}`}>

          <a
            href={`/${to}`}
          >
            {color}
          </a>

        </Link>
      </LinkBox>
    </>
  );
};

To.defaultProps = {
  activeColor: EmphasisText,
};
