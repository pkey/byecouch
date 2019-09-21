import React from 'react';
import Layout from '../components/Layout';
import { Container } from 'react-bootstrap';

import List from '../components/List';
import Categories from '../components/Categories'

const Home = () => (
  <Layout>
    <Container>
    <Categories />
      <h3>Activities</h3>
      <List />
    </Container>
  </Layout>
);

export default Home;
