/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { SignInButton, ButtonContainer } from './SignInStart';
import { useRef } from 'react';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const InputStyle = css`
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vh;
`;
const Input = styled.input`
  height: 8vh;
  width: 90%;
  border-radius: 10px;
  border: solid 1px rgba(136, 118, 118, 0.5);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  &.placeholder {
    text-align: center;
  }
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;

const SignInUserCheck = () => {
  const inputRef = useRef<any>('');
  const onInputHandler = (e: InputEvent) => {
    inputRef.current = e.target.value;
    console.log(inputRef.current);
  };
  return (
    <div css={InputStyle}>
      <H2>휴대폰 번호로 로그인해주세요!</H2>
      <Input
        ref={inputRef}
        onChange={onInputHandler}
        placeholder="휴대폰 번호 11자리를 입력해주세요"
      />
      <div css={ButtonContainer}>
        <SignInButton shape="round" htmlType="submit">
          <h2>로그인 (after 인증 하기)</h2>
        </SignInButton>
      </div>
    </div>
  );
};

export default SignInUserCheck;
