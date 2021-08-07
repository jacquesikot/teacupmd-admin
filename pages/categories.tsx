import React from 'react';
import Head from 'next/head';

import { Categories as CategoriesScreen } from '../src/screens';

const Categories = () => {
  return (
    <>
      <Head>
        <title>Categories</title>
        <link rel="icon" href="/goloanFavicon.svg" />
      </Head>
      <CategoriesScreen />
    </>
  );
};

export default Categories;
