import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PState } from 'src/reducers/rootreducer';
import AppLayout from 'src/components/AppLayout';
const Home: NextPage = () => {
  const router = useRouter();
  const { status } = useSelector<PState, any>((state) => state.signin);

  useEffect(() => {
    if (status === 'loggedin') {
      router.push('/signin');
    }
  }, [status]);

  return (
    <>
      <AppLayout />
    </>
  );
};

export default Home;
