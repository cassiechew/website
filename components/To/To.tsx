// Components/ALink/ALink.tsx

import {
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { useRouter } from 'next/router';

declare type Props = {
    name : string,
    to: string
}

export const To = ({ name, to } : Props) : JSX.Element => {
  const router = useRouter();
  const color = router.pathname === `/${to}` ? '#FF0066' : mode('black', 'white');
  return (
    <>
      <LinkBox>
        <LinkOverlay href={`/${to}`}>

          <a
            href={`/${to}`}
          >
            <Text pr="50px" color={color} fontSize="2xl">{name}</Text>
          </a>

        </LinkOverlay>
      </LinkBox>
    </>
  );
};
