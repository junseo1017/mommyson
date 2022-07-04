/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  HomeOutlined,
  HomeFilled,
  FireFilled,
  FireOutlined,
  AppstoreFilled,
  AppstoreOutlined,
  UserOutlined,
  BugFilled,
} from '@ant-design/icons';
import { BNavBarStyle } from './UI/navstyle';
import { ClickEvent } from 'src/types/Commontype';
import { PState } from 'src/reducers/rootreducer';
import { curNavActions } from 'src/reducers/currentNav';
import { useCallback } from 'react';

const BottomNavBar = () => {
  const { home, gether, square, profile } = useSelector<PState, any>((state) => state.curNav);
  const squareRef = useRef();
  const dispatch = useDispatch();
  const navHomeHandler = useCallback((e: ClickEvent) => {
    dispatch(curNavActions.navHome());
  }, []);
  const navGetherHandler = useCallback((e: ClickEvent) => {
    dispatch(curNavActions.navGether());
  }, []);
  const navSquareHandler = useCallback((e: ClickEvent) => {
    dispatch(curNavActions.navSquare());
  }, []);
  const navProfileHandler = useCallback((e: ClickEvent) => {
    dispatch(curNavActions.navProfile());
  }, []);

  return (
    <div css={BNavBarStyle}>
      <ul>
        <li onClick={navHomeHandler}>
          <div>
            {home ? <HomeFilled /> : <HomeOutlined />}
            <span>홈</span>
          </div>
        </li>
        <li onClick={navGetherHandler}>
          <div>
            {gether ? <FireFilled /> : <FireOutlined />}
            <span>모임</span>
          </div>
        </li>
        <li onClick={navSquareHandler}>
          <div>
            {square ? <AppstoreFilled /> : <AppstoreOutlined />}
            <span>광장</span>
          </div>
        </li>
        <li onClick={navProfileHandler}>
          <div>
            {profile ? <BugFilled /> : <UserOutlined />}
            <span>내 정보</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BottomNavBar;
