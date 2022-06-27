/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { css, jsx } from '@emotion/react';
import Link from 'next/link';
import { Grid, Button } from '@mui/material';
import styled from '@emotion/styled';

const GreetingDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h1 {
    padding-top: 10vh;
  }
  & p {
    margin: 0;
  }
  & div {
    padding-top: 50vh;
    display: flex;
    flex-direction: column;
    gap: 2.5vh;
  }
`;

const LoginformButton = css`
  width: 50vw;
  height: 5vh;
`;

const Greeting: FC = () => {
  return (
    <GreetingDiv>
      <h1>MommySon</h1>
      <p>MommySon is</p>
      <p>Community for parents</p>
      <div>
        <Link href="/signin">
          <Button variant="contained" css={LoginformButton}>
            <a>Sign In</a>
          </Button>
        </Link>
        <Button variant="contained" css={LoginformButton}>
          Sign Up
        </Button>
      </div>
    </GreetingDiv>
  );
};

export default Greeting;
