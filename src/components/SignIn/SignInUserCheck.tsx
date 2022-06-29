/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from 'antd';

const userCheckStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 7vh;
  & > * {
  }
  & Button {
    width: 90%;
    height: 100%;
    @media (min-width: 578px) {
      width: 50vw;
    }
  }
  & Button h2 {
    color: white;
    font-size: 16px;
    margin: 0;
  }
`;

const StartButton = styled(Button)`
  background-color: #7da6e3;
`;

const SignInUserCheck = () => {
  return (
    <div css={userCheckStyle}>
      <StartButton shape="round">
        <h2>시작하기</h2>
      </StartButton>
    </div>
  );
};
export default SignInUserCheck;
