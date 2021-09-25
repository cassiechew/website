// Components/ALink/ALink.tsx

import {
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
// import { mode } from '@chakra-ui/theme-tools';
import { useRouter } from 'next/router';

declare type Props = {
    name : string,
    to: string
}

export const To = ({ name, to } : Props) : JSX.Element => {
  const router = useRouter();

  const color = router.pathname === `/${to}` ? <Text pr="50px" color="#FF0066" fontSize="2xl">{name}</Text> : <Text pr="50px" color="gray.500" fontSize="2xl">{name}</Text>;
  return (
    <>
      <LinkBox>
        <LinkOverlay href={`/${to}`}>

          <a
            href={`/${to}`}
          >
            {color}
          </a>

        </LinkOverlay>
      </LinkBox>
    </>
  );
};
