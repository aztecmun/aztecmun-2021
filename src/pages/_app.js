import { AnimatePresence } from 'framer-motion'

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

import Layout from '../components/Layouts/Main'

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <GlobalStyle />
      <Layout>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </AnimatePresence>
  );
}
