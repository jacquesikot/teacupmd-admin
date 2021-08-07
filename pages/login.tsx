import React from 'react';
import Head from 'next/head';

import { Login as LoginScreen } from '../src/screens';

const Login = () => {
  return (
    <>
      <Head>
        <title>Sign In</title>
        <link rel="icon" href="/goloanFavicon.svg" />
      </Head>
      <LoginScreen />
    </>
  );
};

export default Login;
