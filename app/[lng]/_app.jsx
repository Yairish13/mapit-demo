import '@styles/variables.css';
import '@styles/fonts.css';
import '@styles/globals.css';
import '@styles/normalize.css';

export default function MyApp({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);
   
    return getLayout(<Component {...pageProps} />);
  }