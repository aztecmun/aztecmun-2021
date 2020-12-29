import Head from 'next/head'

import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

import Layout from '../components/Main'

export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <GlobalStyle />
      <Head>
        <title>AztecMun</title>
      </Head>
      <AnimateSharedLayout>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AnimateSharedLayout>
    </Layout>
  );
}
