import '/assets/css/bootstrap.min.css';
import '/assets/css/font-awesome.min.css';
import '/assets/css/style.css';

import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />

      <script src="assets/js/jquery-3.2.1.min.js"></script>
      <script src="assets/js/popper.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/jquery.slimscroll.js"></script>
      <script src="assets/js/app.js"></script>

    </>
  )
}

export default App;

