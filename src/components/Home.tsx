/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { checkUserExist } from 'src/apis/user';
import { PState } from 'src/reducers/rootreducer';
import Gether from './Gether';
const homeContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Home = () => {
  const [gether, setGether] = useState<any>(false);
  const { data } = useQuery('user', checkUserExist);
  const { userNumber } = useSelector<PState, any>((state) => state.signin);

  useEffect(() => {
    if (data) {
      const getherData = data
        .filter((e: { phonenumber: string }) => e.phonenumber === userNumber)
        .map((e: { gether?: string }) => e.gether);
      setGether(getherData);
      console.log(gether);
    }
  }, [data]);

  return (
    <div css={homeContainer}>
      {gether
        ? gether.map((e: { id: number; title: string }) => {
            return <p key={e.id}>{e.title}</p>;
          })
        : null}
    </div>
  );
};
export default Home;
