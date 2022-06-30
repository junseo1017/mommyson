import styled from '@emotion/styled';
import { Button } from 'antd';

export const SignInButton = styled(Button)`
  background-color: #7da6e3;
  width: 90%;
  height: 100%;

  & h2 {
    color: white;
    font-size: 16px;
    margin: 0;
  }
`;

export const SignInInput = styled.input`
  height: 8vh;
  width: 90%;
  border-radius: 10px;
  border: solid 1px rgba(136, 118, 118, 0.5);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
`;
