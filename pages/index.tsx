import { useState, useEffect } from 'react';
import firebase from 'firebase';
import Head from 'next/head';
import { Dashboard, Login } from '../src/screens';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <>
        <Head>
          <title>Sign In</title>
          <link rel="icon" href="/goloanFavicon.svg" />
        </Head>
        <Login />
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Goloan Dashboard</title>
          <link rel="icon" href="/goloanFavicon.svg" />
        </Head>
        <Dashboard />
      </>
    );
  }
}
