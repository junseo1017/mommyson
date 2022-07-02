import React, { FC, useState } from 'react';
import { Row, Col } from 'antd';
import BottomNavBar from './Layout/BottomNavBar';
import CommmonComponent from '../types/Commontype';

const AppLayout: FC<CommmonComponent> = ({ children }) => {
  return (
    <div>
      <Row>
        <Col xs={24} md={12}>
          <h1>hi</h1>
        </Col>
      </Row>
      <BottomNavBar />
    </div>
  );
};

export default AppLayout;
