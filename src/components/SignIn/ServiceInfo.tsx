/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

const infoStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & * {
    margin: 0;
  }
  & img {
    width: 100vw;
    @media (min-width: 578px) {
      width: 50vw;
    }
  }
`;

const ServiceInfo = () => {
  return (
    <div css={infoStyle}>
      <img src="/img/logo.png" alt="mommysonlogo" />
    </div>
  );
};

export default ServiceInfo;
