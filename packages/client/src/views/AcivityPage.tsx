import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

import {
  Card,
  Comment,
  PageHeader,
  Avatar,
  Rate,
  Statistic,
  Col,
  Row,
  Icon,
  Tag
} from 'antd';

import activities from '../data/activities.json';
import { Container } from 'react-bootstrap';
import DayList from '../components/DayList';

const activity = activities[0];

const RateStars = styled(Rate)`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Comments = () => (
  <Comment
    author={<a>Han Solo</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    }
  />
);

const types: any = {
  Rankdarbiai: 'red',
  Menai: 'cyan',
  Sportas: 'gold',
  Muzika: 'magenta',
  Tech: 'green',
  Kalbos: 'purple'
};

const Activity = () => (
  <Layout>
    <Container>
      <Card
        cover={
          <img
            style={{ height: 200, objectFit: 'cover' }}
            src={activity.image}
          />
        }
      >
        <RateStars disabled defaultValue={activity.rating} />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ marginBottom: 20 }}>
            <h2>{activity.name}</h2>
            <Tag color={types[activity.category]}>{activity.category}</Tag>
          </div>

          <div>
            <span style={{ marginRight: 10 }}>+ {activity.phone}</span>
            <Icon spin={true} type="phone" theme="twoTone" />
          </div>
        </div>

        <p>{activity.description}</p>

        <Row gutter={16}>
          <Col span={4}>
            <Statistic title="Mėnesio kaina" value={activity.price + '$'} />
          </Col>
          <Col span={4}>
            <Statistic title="Dalyvių skaičius" value={activity.participants} />
          </Col>
        </Row>

        <hr />

        <div style={{ marginTop: 40 }}>
          <h6>Tvarkaraštis </h6>
          <DayList />
        </div>

        <h4>Reviews</h4>
        <Comments />
      </Card>
    </Container>
  </Layout>
);

export default Activity;
