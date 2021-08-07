import React from 'react';

import { Container } from './styles';
import NavBar from '../NavBar/NavBar';

interface Props {
  children: any;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
