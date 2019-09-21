import React from 'react';
import Layout from '../components/Layout';
import { Container } from 'react-bootstrap';

import ActivityList from '../components/ActivityList';
import Categories from '../components/Categories'

const Home = () => (
  <Layout>
    <Container>
    <Categories />
      <h3>Activities</h3>
      <ActivityList />
    </Container>
  </Layout>
);

export default Home;
