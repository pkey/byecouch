import React from 'react';
import Layout from '../components/Layout';
import { Container } from 'react-bootstrap';

import ActivityList from '../components/ActivityList';
import Categories from '../components/Categories';
import { Col, Row } from 'antd';
import ActivityMap from './Map';

const Home = () => (
  <Layout>
    <div style={{ height: 'calc(100vh - 100px)' }}>
      <Row gutter={24}>
        <Col span={12}>
          <Container>
            <Categories />
            <h3 style={{ marginBottom: 20 }}>
              Veiklos <span style={{ fontSize: 14 }}>(51)</span>
            </h3>

            <ActivityList />
          </Container>
        </Col>

        <Col span={12}>
          <ActivityMap />
        </Col>
      </Row>
    </div>
  </Layout>
);

export default Home;
