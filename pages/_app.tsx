/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) : JSX.Element {
//   const currentPage = React.createContext('/');
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
