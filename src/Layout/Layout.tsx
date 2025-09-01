import React from 'react';
import { Outlet } from 'react-router';
import { Layout as AntdLayout } from 'antd';
import Footer from './Footer';
import Header from './Header';

const { Content } = AntdLayout;

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const Layout: React.FC = () => (

  <AntdLayout style={{ minHeight: '100dvh' }}>
    <AntdLayout>
      <Header />
      <Content style={contentStyle}>
        <Outlet /> 
      </Content>
      <Footer />
    </AntdLayout>
  </AntdLayout>
);

export default Layout;