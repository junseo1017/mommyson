/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { FC } from 'react';
import { CommonComponent } from 'src/types/Commontype';
import { HomeGetherBtnStyle } from './HomeStyles';

const HomeGetherBtn: FC<CommonComponent> = ({ children }) => {
  return <div css={HomeGetherBtnStyle}>{children}</div>;
};
export default HomeGetherBtn;
