// Components/ALink/ALink.tsx

import {
  LinkBox,
  // LinkOverlay,
  Text,
} from '@chakra-ui/react';
// import { mode } from '@chakra-ui/theme-tools';
import { useRouter } from 'next/router';
import Link from 'next/link';

declare type Props = {
    name : string,
    to: string
}

export const To = ({ name, to } : Props) : JSX.Element => {
  const router = useRouter();

  const color = router.pathname === `/${to}` ? (
    <Text
      pr="50px"
      color="#FF0066"
      fontSize="2xl"
      font="monospace"
    >
      {name}
    </Text>
  ) : (
    <Text
      pr="50px"
      color="gray.500"
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
