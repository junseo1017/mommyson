/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import React, { FC, useState } from 'react';
import { Container, Grid } from '@mui/material';
import TopNav from './Layout/TopNav';
import BottomNav from './Layout/BottomNav';
import Greeting from '../pages/greeting';

const mainContent = css`
  padding-top: 70px;
`;

type LayoutProps = {
  children?: React.ReactNode;
};

const AppLayout: FC<LayoutProps> = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <Container maxWidth="md">
      {!isLoggedIn ? (
        <Greeting />
      ) : (
        <>
          <TopNav />
          <Grid css={mainContent} container>
            <Grid item xs={12}>
              {children}
            </Grid>
          </Grid>
          <BottomNav />
        </>
      )}
    </Container>
  );
};

export default AppLayout;
