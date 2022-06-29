import '../style/_app.css';
import 'antd/dist/antd.css';
import Head from 'next/head'; //head 정도를 수정

import type { AppProps } from 'next/app';

const Mommyson = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="annonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Mommyson;
