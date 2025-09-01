import React from 'react';
import { Layout, Menu } from 'antd';
import { Pages } from '../Pages/Pages';
import { NavLink } from 'react-router';

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const Header: React.FC = () => (
    <Layout.Header style={headerStyle}>
        <Menu theme="dark" mode="horizontal" selectable={false}>
            {Pages.map((p) => (
            <Menu.Item key={p.path}>
                <NavLink
                to={p.path}
                end={p.exact}
                className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                }
                >
                {p.label}
                </NavLink>
            </Menu.Item>
            ))}
        </Menu>
        Header
        
    </Layout.Header>
);

export default Header;