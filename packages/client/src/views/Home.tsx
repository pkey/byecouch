import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Container } from 'react-bootstrap';

import ActivityList from '../components/ActivityList';
import Categories from '../components/Categories';
import Filters from '../components/Filters';

import { Row, Col } from 'react-bootstrap';
import ActivityMap from './Map';

import axios from 'axios'

const OnlyMobile = styled(Col)`
  @media screen and (max-device-width: 760px) {
    display: none;
  }
`;


class Home extends Component {
  state = {
    activities: []
  }

  async componentDidMount() {
    const response = await axios.post("/api/activities", {});
    this.setState({ activities: response.data })
  } 

  render() {
    const { activities } = this.state;
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
              <Categories />
              <h3 style={{ marginBottom: 10 }}>
                Veiklos <span style={{ fontSize: 14 }}>({activities.length})</span>
              </h3>
            </Container>

            <ActivityList activities={activities} />
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
