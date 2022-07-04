/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { BellFilled } from '@ant-design/icons';
import { AppBarStyle } from './UI/navstyle';
const AppBar = () => {
  return (
    <div css={AppBarStyle}>
      <ul>
        <li>
          <img src="/img/logo.png" alt="mommysonlogo" />
        </li>
        <li>
          <BellFilled />
        </li>
      </ul>
    </div>
  );
};
export default AppBar;
