/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import React, { FC } from 'react';
import { Row, Col, Button } from 'antd';
import ServiceInfo from './ServiceInfo';
import CommmonComponent from '../../types/CommonComponents';

const SignInLayout: FC<CommmonComponent> = ({ children }) => {
  return (
    <div>
      <Row justify="center" align="bottom" style={{ height: '40vh' }}>
        <Col xs={24}>
          <ServiceInfo />
        </Col>
      </Row>
      <Row justify="end" align="bottom" style={{ minHeight: '40vh' }}>
        <Col xs={24}>{children}</Col>
      </Row>
    </div>
  );
};
export default SignInLayout;
