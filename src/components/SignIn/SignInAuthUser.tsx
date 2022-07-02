/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { useRouter } from 'next/router';
import { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SignInInput, SignInButton } from './UI/SignInUI';
import { UserInputStyle, ButtonContainer } from './UI/SignInContainer';
import SignInSlice from 'src/reducers/signIn';
import { InputEvent } from 'src/types/Commontype';
import { PState } from 'src/reducers/rootreducer';
import { addUser } from 'src/apis/user';
const MessageStyle = css`
  display: flex;
  justify-content: start;
  align-items: flex-start;
`;

const SignInAuthUser: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { status } = useSelector<PState, any>((state) => state.signin);
  const { userNumber } = useSelector<PState, any>((state) => state.signup);
  const inputRef = useRef<HTMLInputElement | any>('');
  const onChangeHandler = (e: InputEvent) => {
    inputRef.current = e.target.value;
    console.log(inputRef.current);
  };

  const onAuthClickHandler = () => {
    if (status === 'newuser') {
      dispatch(SignInSlice.actions.isloggedin());
      router.push('/');
    }
    if (status === 'existing') {
      dispatch(SignInSlice.actions.isloggedin());
      router.push('/');
    }
  };

  let SignInMessage;
  if (status === 'newuser') {
    SignInMessage = <h2>휴대폰 번호로 가입을 진행해주세요</h2>;
  } else if (status === 'existing') {
    SignInMessage = <h2>휴대폰 번호로 로그인을 진행해주세요</h2>;
  }

  return (
    <div css={UserInputStyle}>
      {SignInMessage}
      <SignInInput
        ref={inputRef}
        onChange={onChangeHandler}
        placeholder="전송받은 인증번호를 입력해주세요"
      />
      <div css={ButtonContainer}>
        <SignInButton onClick={onAuthClickHandler} shape="round">
          <h2>인증하기</h2>
        </SignInButton>
      </div>
    </div>
  );
};

export default SignInAuthUser;
