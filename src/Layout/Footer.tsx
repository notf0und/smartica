import React from "react";
import { Layout } from "antd";

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const Footer: React.FC = () => (
    <Layout.Footer style={footerStyle}>
        Footer
    </Layout.Footer>
);

export default Footer;