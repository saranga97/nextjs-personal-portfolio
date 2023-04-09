import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { ChakraProvider } from "@chakra-ui/react";
import AppContainer from "../components/AppContainer";
import theme from "../config/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>

        <Component {...pageProps} />

    </ChakraProvider>
  );
}

{/* <ChakraProvider theme={theme}>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </ChakraProvider> */}