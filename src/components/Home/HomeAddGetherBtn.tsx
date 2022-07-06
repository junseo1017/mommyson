/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { HomeGetherBtnStyle } from './HomeStyles';
import { PlusCircleOutlined } from '@ant-design/icons';
const HomeAddGetherBtn = () => {
  return (
    <div css={HomeGetherBtnStyle}>
      <h3>
        모임 추가하기 <PlusCircleOutlined />
      </h3>
    </div>
  );
};
export default HomeAddGetherBtn;
