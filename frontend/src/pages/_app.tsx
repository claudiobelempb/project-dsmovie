import '../assets/css/global.scss';
import { ToastContainer } from 'react-toastify';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default MyApp;
