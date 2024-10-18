import Layout from '../components/Layout'
import 'remixicon/fonts/remixicon.css'
import '../styles/globals.css'
import "../styles/how-it-works.css"
import '../styles/book-a-demo.css'

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const use = async () => {
      if (typeof window !== 'undefined') {
        const twElements = await import('tw-elements');
        twElements.default;
      }
    };
    use();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;