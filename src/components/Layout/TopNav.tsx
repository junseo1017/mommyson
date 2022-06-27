/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { css, jsx } from '@emotion/react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Notifications } from '@mui/icons-material';

const topNav = css`
  background-color: white;
  color: black;
`;

const TopNav: FC = () => {
  return (
    <AppBar css={topNav} position="fixed">
      <Toolbar>
        <Typography component="div" sx={{ flexGrow: 1 }}>
          MOMMYSON
        </Typography>
        <IconButton size="large" edge="end" color="inherit" aria-label="menu">
          <Notifications />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
