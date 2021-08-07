import React from 'react';
import Head from 'next/head';

import { Customers as CustomersScreen } from '../src/screens';

const Customers = () => {
  return (
    <>
      <Head>
        <title>Customers</title>
        <link rel="icon" href="/goloanFavicon.svg" />
      </Head>
      <CustomersScreen />
    </>
  );
};

export default Customers;
