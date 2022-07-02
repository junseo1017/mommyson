/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { Segmented, Avatar } from 'antd';
import {
  HomeOutlined,
  HomeFilled,
  FireFilled,
  FireOutlined,
  AppstoreFilled,
  AppstoreOutlined,
  UserOutlined,
} from '@ant-design/icons';
const BNavBarStyle = css`
  width: 100vw;
  position: fixed;
  border-top: solid 0.1px;
  bottom: 0;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

  & * {
    margin: 0;
    padding: 0;
  }

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
    list-style: none;
  }
  & li {
    min-width: 80px;
  }
`;

const BottomNavBar = () => {
  return (
    <nav css={BNavBarStyle}>
      <ul>
        <li>
          <HomeOutlined />
          <span>홈</span>
        </li>
        <li>
          <FireOutlined />
          <span>모임</span>
        </li>
        <li>
          <AppstoreOutlined />
          <span>광장</span>
        </li>
        <li>
          <UserOutlined />
          <span>내 정보</span>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavBar;
