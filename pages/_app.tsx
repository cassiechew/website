/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

function MyApp({ Component, pageProps }: AppProps) : JSX.Element {
//   const currentPage = React.createContext('/');
  return (
    <ChakraProvider theme={extendTheme({
      fonts: {
        heading: 'monospace',
        body: 'monospace',
      },
      initialColorMode: 'dark',
      useSystemColorMode: true,
      styles: {
        global: (props: Dict<never> | StyleFunctionProps) => ({
          body: {
            bg: mode('white', 'black')(props),
          },
        }),
      },
    })}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
