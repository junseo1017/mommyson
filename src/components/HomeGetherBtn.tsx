/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { FC } from 'react';
import { CommonComponent } from '../types/Commontype';

const HomeGetherBtnStyle = css`
  height: 5rem;
  background-color: white;
  border: 1px solid #868a8a13;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.1rem;
  padding: 15px;
  font-weight: 700;
  border-radius: 20px;
  & * {
    margin: 0;
  }
  & > p {
    font-weight: 500;
    color: #616161;
    font-size: 0.7rem;
  }
`;

const HomeGetherBtn: FC<CommonComponent> = ({ children }) => {
  return <div css={HomeGetherBtnStyle}>{children}</div>;
};
export default HomeGetherBtn;
