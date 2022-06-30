/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { useCallback, useRef, FC } from 'react';
import { SignInButton, SignInInput } from './UI/SignInUI';
import { UserInputStyle, ButtonContainer } from './UI/SignInContainer';
import SignInSlice from 'src/reducers/signIn';
import { useQuery } from 'react-query';
import { checkUserExist } from 'src/apis/user';
import { useDispatch, useSelector } from 'react-redux';
import { InputEvent } from 'src/types/Commontype';

const SignInUserCheck: FC = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<any>(null);
  const { data: userdata } = useQuery('user', checkUserExist);
  const onInputHandler = useCallback((e: InputEvent) => {
    inputRef.current = e.target.value;
  }, []);

  const onSignInClickHandler = useCallback(() => {
    const checkExistUser = userdata.filter(
      (e: { phonenumber: string }) => e.phonenumber === inputRef.current
    );
    if (checkExistUser[0]) {
      dispatch(SignInSlice.actions.existUser());
    } else {
      dispatch(SignInSlice.actions.newUser());
    }
  }, [userdata]);
  return (
    <div css={UserInputStyle}>
      <SignInInput
        maxLength={11}
        ref={inputRef}
        onChange={onInputHandler}
        placeholder="휴대폰 번호 11자리를 입력해주세요"
      />
      <div css={ButtonContainer}>
        <SignInButton onClick={onSignInClickHandler} shape="round" htmlType="submit">
          <h2>로그인 (after 인증 하기)</h2>
        </SignInButton>
      </div>
    </div>
  );
};

export default SignInUserCheck;
