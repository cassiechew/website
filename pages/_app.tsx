/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme, Fade } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) : JSX.Element {
//   const currentPage = React.createContext('/');
  const router = useRouter();
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
      <Fade
        key={router.route}
        // initialScale={0.9}
        in
      >
        <Component {...pageProps} />
      </Fade>
    </ChakraProvider>
  );
}

export default MyApp;
