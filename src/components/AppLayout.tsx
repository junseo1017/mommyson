import React, { FC, useState } from 'react';
import { Row, Col } from 'antd';
import BottomNavBar from './MainLayout/BottomNavBar';
import CommmonComponent from '../types/Commontype';
import AppBar from './MainLayout/AppBar';

const AppLayout: FC<CommmonComponent> = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Row>
        <Col xs={24} md={12}>
          {children}
        </Col>
      </Row>
      <BottomNavBar />
    </div>
  );
};

export default AppLayout;
