import React from 'react';
import Head from 'next/head';

import { Department as DepartmentScreen } from '../src/screens';

const Department = () => {
  return (
    <>
      <Head>
        <title>Department</title>
        <link rel="icon" href="/goloanFavicon.svg" />
      </Head>
      <DepartmentScreen />
    </>
  );
};

export default Department;
