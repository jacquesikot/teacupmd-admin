import '@fontsource/poppins/400.css';
import '@fontsource/inter';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../src/theme/fonts';

import firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBzw0EAvAbdydNELokO76CLCwIVDVAjUzw',
  authDomain: 'epharma-mobile-apps.firebaseapp.com',
  databaseURL: 'https://epharma-mobile-apps-default-rtdb.firebaseio.com/',
  projectId: 'epharma-mobile-apps',
  storageBucket: 'epharma-mobile-apps.appspot.com',
  messagingSenderId: '54083160986',
  //   appId: 'app-id',
  //   measurementId: 'G-measurement-id',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
