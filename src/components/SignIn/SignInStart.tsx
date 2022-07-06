/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { useCallback, FC } from 'react';
import { SignInButton } from './UI/SignInUI';
import { ButtonContainer } from './UI/SignInContainer';
import SignInSlice from 'src/reducers/signIn';
import { useDispatch, useSelector } from 'react-redux';
import { PState } from 'src/reducers/rootreducer';

const SignInStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 8vh;
  & > * {
    margin: 0;
  }
`;

const SignInStart: FC = () => {
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
