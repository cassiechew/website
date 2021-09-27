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
      config: {
        initialColorMode: 'dark',
      },
      styles: {
        global: (props: Dict<never> | StyleFunctionProps) => ({
          To: {
            '-webkit-tap-highlight-color': '#FFF0',
          },
          '#mobile-nav-button': {
            bg: 'transparent',
          },
          body: {
            bg: mode('white', 'black')(props),
          },
          html: {
            overflowY: 'scroll',
          },
          '::-webkit-scrollbar-track': {
            background: mode('white', 'black')(props),
          },
          '::-webkit-scrollbar': {
            width: '7px',
          },
          '::-webkit-scrollbar-thumb': {
            background: '#F06D',
            borderRadius: '5px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: '#555',
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
