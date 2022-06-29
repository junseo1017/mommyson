/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import SignInSlice from '../../reducers/signIn';
import { useDispatch, useSelector } from 'react-redux';
import { PState } from '../../reducers/rootreducer';

import { useCallback } from 'react';
export const SignInStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 8vh;
  & > * {
    margin: 0;
  }
`;

export const ButtonContainer = css`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 8vh;
`;

export const SignInButton = styled(Button)`
  background-color: #7da6e3;
  width: 90%;
  height: 100%;
  @media (min-width: 578px) {
    width: 50vw;
  }
  & h2 {
    color: white;
    font-size: 16px;
    margin: 0;
  }
`;

const SignInStart = () => {
  const dispatch = useDispatch();
  const { status } = useSelector<PState, any>((state) => state.signin);

  const onStartClickHandler = useCallback(() => {
    dispatch(SignInSlice.actions.startSignIn());
  }, [status]);

  return (
    <div css={SignInStyle}>
      <div css={ButtonContainer}>
        <SignInButton onClick={onStartClickHandler} shape="round">
          <h2>시작하기</h2>
        </SignInButton>
      </div>
    </div>
  );
};
export default SignInStart;
