import React from 'react';
import Layout from '../components/Layout';
import { Container } from 'react-bootstrap';

import ActivityList from '../components/ActivityList';
import Categories from '../components/Categories'
import { Col, Row } from "antd";
import ActivityMap from "./Map";

const Home = () => (
  <Layout>
    <Container>
        <Categories />
        <Row gutter={24}>
            <Col span={12}>
                <h3 style={{ marginBottom: 20}}>Activities</h3>
                <ActivityList/>
            </Col>
            <Col span={12}>
                <ActivityMap/>
            </Col>
        </Row>
    </Container>
  </Layout>
);

export default Home;
