/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import React, { FC, useRef } from 'react';

import { SignInInput, SignInButton } from './UI/SignInUI';
import { UserInputStyle, ButtonContainer } from './UI/SignInContainer';
import { InputEvent } from 'src/types/Commontype';

const SignInAuthUser: FC = () => {
  const inputRef = useRef<HTMLInputElement | any>('');
  const onChangeHandler = (e: InputEvent) => {
    inputRef.current = e.target.value;
    console.log(inputRef.current);
  };
  return (
    <div css={UserInputStyle}>
      <SignInInput
        ref={inputRef}
        onChange={onChangeHandler}
        placeholder="전송받은 인증번호를 입력해주세요"
      />
      <div css={ButtonContainer}>
        <SignInButton shape="round">
          <h2>인증하기</h2>
        </SignInButton>
      </div>
    </div>
  );
};

export default SignInAuthUser;
