import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { AuhtProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuhtProvider>
      <Component {...pageProps} />
    </AuhtProvider>
  );
}

export default MyApp
