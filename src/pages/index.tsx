import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const Home: NextPage = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/signin');
    }
  }, []);

  return (
    <>
      <h1>hi</h1>
      <Link href="/signin">
        <a>버튼</a>
      </Link>
    </>
  );
};

export default Home;
