import React from 'react';
import Layout from '../components/Layout';
import { Container } from 'react-bootstrap';

import List from '../components/List';

const Home = () => (
  <Layout>
    <Container>
      <h3>Activities</h3>
      <List />
    </Container>
  </Layout>
);

export default Home;
