// Components/ALink/ALink.tsx

import {
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

declare type Props = {
    name : string,
    to: string
}

export const To = ({ name, to } : Props) : JSX.Element => {
  const router = useRouter();
  const color = router.pathname === `/${to}` ? '#FF0066' : 'white';
  return (
    <>
      <Link href={`/${to}`}>
        <a
          href={`/${to}`}

        >
          <Text pr="50px" color={color} fontSize="2xl">{name}</Text>

        </a>
      </Link>
    </>
  );
};
