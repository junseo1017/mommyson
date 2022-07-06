import React, { FC, useState } from 'react';
import { Row, Col } from 'antd';
import BottomNavBar from './MainLayout/BottomNavBar';
import { CommonComponent } from '../types/Commontype';
import AppBar from './MainLayout/AppBar';

const AppLayout: FC<CommonComponent> = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Row>
        <Col xs={24}>{children}</Col>
      </Row>
      <BottomNavBar />
    </div>
  );
};

export default AppLayout;
