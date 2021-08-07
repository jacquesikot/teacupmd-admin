import React from 'react';
import Head from 'next/head';

import { Products as ProductsScreen } from '../src/screens';

const Products = () => {
  return (
    <>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/goloanFavicon.svg" />
      </Head>
      <ProductsScreen />
    </>
  );
};

export default Products;
