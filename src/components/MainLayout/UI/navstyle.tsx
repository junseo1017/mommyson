/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

export const barHeight = '60px';

export const BNavBarStyle = css`
  z-index: 50000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100vw;
  height: ${barHeight};
  position: fixed;
  bottom: 0;
  border-top: solid #868a8a73 0.1rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);

  & * {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
  }

  & ul {
    width: 576px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }
  & li {
    min-width: 80px;
  }
  & li div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & li span {
    font-size: 0.5rem;
  }
`;

export const AppBarStyle = css`
  z-index: 99999;
  height: ${barHeight};
  width: 100vw;
  position: fixed;
  background-color: white;
  top: 0;
  border-bottom: solid #868a8a13 0.1rem;

  & * {
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
  }
  & ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    height: 100%;
    position: relative;
  }
  & span {
    padding-right: 3vw;
  }
  & img {
    position: absolute;
    top: 1vh;
    width: 200px;
  }
`;
