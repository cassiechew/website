/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme, ScaleFade } from '@chakra-ui/react';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

function MyApp({ Component, pageProps, router }: AppProps) : JSX.Element {
//   const currentPage = React.createContext('/');
  return (
    <ChakraProvider theme={extendTheme({
      fonts: {
        heading: 'monospace',
        body: 'monospace',
      },
      styles: {
        global: () => ({
          body: {
            bg: 'black',
          },
        }),
      },
    })}
    >
      <ScaleFade
        key={router.route}
        initialScale={0.9}
        in
      >
        <Component {...pageProps} />

      </ScaleFade>
    </ChakraProvider>
  );
}

export default MyApp;
