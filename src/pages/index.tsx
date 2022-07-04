import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PState } from 'src/reducers/rootreducer';
import { barHeight } from 'src/components/MainLayout/UI/navstyle';
import AppLayout from 'src/components/AppLayout';
const Home: NextPage = () => {
  const router = useRouter();
  const { status } = useSelector<PState, any>((state) => state.signin);
  const { home, gether, square, profile } = useSelector<PState, any>((state) => state.curNav);

  useEffect(() => {
    if (status !== 'loggedin') {
      router.push('/signin');
    }
  }, [status]);

  return (
    <>
      <AppLayout>
        <div style={{ marginTop: barHeight }}>
          <h1>hi1</h1>
          <h1>hi</h1>
          <h1>hi</h1>
          <h1>hi</h1>
          <h1>hi</h1>
          <h1>hi</h1>
          <h1>hi</h1>
          <h1>hi</h1>
          <h1>hi</h1>
          <h1>hi</h1>
        </div>
      </AppLayout>
    </>
  );
};

export default Home;
