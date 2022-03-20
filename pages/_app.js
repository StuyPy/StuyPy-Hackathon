import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';

import { useEffect} from 'react';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
