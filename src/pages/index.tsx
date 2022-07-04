import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PState } from 'src/reducers/rootreducer';
import { barHeight } from 'src/components/MainLayout/UI/navstyle';
import AppLayout from 'src/components/AppLayout';
import Home from 'src/components/Home';
import Gether from 'src/components/Gether';
import Profile from 'src/components/Profile';
import Square from 'src/components/Square';
const Main: NextPage = () => {
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
          {home && <Home />}
          {gether && <Gether />}
          {square && <Square />}
          {profile && <Profile />}
        </div>
      </AppLayout>
    </>
  );
};

export default Main;
