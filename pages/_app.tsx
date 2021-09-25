/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

function MyApp({ Component, pageProps }: AppProps) : JSX.Element {
//   const currentPage = React.createContext('/');
  return (
    <ChakraProvider theme={extendTheme({
      fonts: {
        heading: 'monospace',
        body: 'monospace',
      },
      styles: {
        global: (props: unknown) => ({
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
