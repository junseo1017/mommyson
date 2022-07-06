/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { useEffect, useState, useRef } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { checkUserExist } from 'src/apis/user';
import { PState } from 'src/reducers/rootreducer';
import HomeGetherBtn from './HomeGetherBtn';
const homeContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  gap: 0.5rem;
`;

const Home = () => {
  const [gether, setGether] = useState<any>(false);
  const { data } = useQuery('user', checkUserExist);
  const { userNumber } = useSelector<PState, any>((state) => state.signin);

  useEffect(() => {
    if (data) {
      setGether(
        data
          .filter((e: { phonenumber: string }) => e.phonenumber === userNumber)
          .map((e: { gether?: string }) => e.gether)[0]
      );
    }
  }, [data]);
  const replaceWord = (str: string) => {
    if (str.length >= 28) {
      return str.substring(0, 28) + '...';
    } else {
      return str;
    }
  };
  const getherMapping = () => {
    return gether.map((e: { id: number; title: string; description: string }) => (
      <HomeGetherBtn key={e.id}>
        <h2>{e.title}</h2>
        <p>{replaceWord(e.description)}</p>
      </HomeGetherBtn>
    ));
  };

  return (
    <div css={homeContainer}>
      {gether ? (
        getherMapping()
      ) : (
        <HomeGetherBtn>
          <h2>모임 추가하기</h2>
        </HomeGetherBtn>
      )}
    </div>
  );
};
export default Home;
