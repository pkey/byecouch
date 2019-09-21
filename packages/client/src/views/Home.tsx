import axios from 'axios';
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import ActivityList from '../components/ActivityList';
import Categories from '../components/Categories';
import Filters from '../components/Filters';
import Layout from '../components/Layout';
import ActivityMap from './Map';

import { Spin } from 'antd';
import AdressForms from '../components/AdressForms';

const OnlyMobile = styled(Col)`
  @media screen and (max-device-width: 760px) {
    display: none;
  }
`;

class Home extends Component {
  state = {
    activities: [],
    categories: [],
    isLoading: true
  };

  async componentDidMount() {
    const activitiesRes = await axios.post('/api/activities', {});
    const typesRes = await axios('/api/types');
    this.setState({
      activities: activitiesRes.data,
      categories: typesRes.data,
      isLoading: false
    });
  }

  render() {
    const { activities, categories, isLoading } = this.state;
    return (
      <Layout>
        <Row>
          <Col
            sm={12}
            md={6}
            xl={6}
            style={{
              height: 'calc(100vh - 100px)',
              overflowY: 'scroll',
              scrollbarWidth: 'none',
              overflowX: 'hidden'
            }}
          >
            <Container>
              <Filters />

              {isLoading ? (
                <div style={{ textAlign: 'center', margin: 20 }}>
                  <Spin tip="Kraunasi..." />
                </div>
              ) : (
                <>
                  <Categories categories={categories} />
                  <h3 style={{ marginBottom: 10 }}>
                    Veiklos
                    <span style={{ fontSize: 14 }}> ({activities.length})</span>
                  </h3>
                  <ActivityList
                    activities={activities}
                    categories={categories}
                  />
                </>
              )}
            </Container>
          </Col>

          <OnlyMobile xs={0} sm={0} md={0} xl={6}>
            <ActivityMap />
          </OnlyMobile>
        </Row>
      </Layout>
    );
  }
}
export default Home;
