import React from 'react';
import Head from 'next/head';

import { Orders as OrdersScreen } from '../src/screens';

const Orders = () => {
  return (
    <>
      <Head>
        <title>Orders</title>
        <link rel="icon" href="/goloanFavicon.svg" />
      </Head>
      <OrdersScreen />
    </>
  );
};

export default Orders;
