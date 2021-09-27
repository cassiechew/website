import { Flex, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Header from '../components/Header';

const Github: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.reload();
  });

  return (
    <Flex>
      <Header />
      <Flex justifyContent="center" alignItems="center" height="90vh">
        <Heading>
          Going to github
          {' '}
          {'->'}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Github;
