import React from 'react';
import styled from 'styled-components';

import { Layout as PageLayout } from 'antd';
import ActivityMap from "../views/Map";
const { Header, Content } = PageLayout;

const WhiteHeader = styled(Header)`
  background-color: #fff;
`;

const Layout = ({ children }: any) => (
  <PageLayout>
    <WhiteHeader>👋 🛋ByeCouch </WhiteHeader>
    <Content style={{ padding: 20 }}>{children}</Content>
  </PageLayout>
);

export default Layout;
