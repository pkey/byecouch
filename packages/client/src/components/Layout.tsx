import React from 'react';
import styled from 'styled-components';

import { Layout as PageLayout } from 'antd';
const { Header, Content } = PageLayout;

const WhiteHeader = styled(Header)`
  background-color: #fff;
`;

const Layout = ({ children }: any) => (
  <PageLayout>
    <WhiteHeader>🤪</WhiteHeader>
    <Content style={{ padding: '0 50px' }}>{children}</Content>
  </PageLayout>
);

export default Layout;
