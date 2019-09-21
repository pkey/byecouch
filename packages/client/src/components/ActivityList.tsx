import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { List, Card, Rate, Tag } from 'antd';
import { Row, Col, Container } from 'react-bootstrap';

import activityList from '../data/activities.json';
import Meta from 'antd/es/card/Meta';
import ActivityMap from '../views/Map';

const Title = styled.h5``;
const Description = styled.p``;

const Rating = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px;
`;

const RatingCount = styled.span`
  font-size: 10px;
`;

const RateStars = styled(Rate)`
  font-size: 20px;
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Cost = styled.p`
  padding: 0px;
  margin-bottom: 5px;
  font-size: 12px;
`;

const colors: any = {
  Šokiai: 'magenta',
  Sportas: 'green',
  Bedarbystė: 'cyan'
};

const ActivityList = () => (
  <List
    size="large"
    pagination={{
      pageSize: 10
    }}

    dataSource={activityList}
    renderItem={activity => (
      <List.Item style={{ padding: 20 }}>
        <Card
          hoverable
          style={{ height: 200, width: '100%' }}
          bodyStyle={{ padding: 0 }}
        >
          <StyledLink to={`activity/${activity.id}`}>
            <Row>
              <Col xs={0} sm={4} style={{padding: 0}}>
                <img
                  src={activity.image}
                  style={{ height: '200px', width: "100%", borderRadius: 10, padding: 5 }}
                />
              </Col>
              <Col xs={0} sm={6} style={{ margin: "15px 20px", padding: 0 }}>
                <span style={{fontSize: 12}}>{activity.spot.name} - {activity.spot.address}</span>
                <Title>{activity.name}</Title>
                <Description>
                  {activity.description}
                </Description>
                <Rating>
                  <RateStars disabled defaultValue={activity.rating} />
                  <RatingCount>{activity.ratingCount}</RatingCount>
                </Rating>
                <span style={{marginRight: 20}}>{activity.price} $/mėn</span>
                <Tag color={colors[activity.category]}>{activity.category}</Tag>

              </Col>
            </Row>
          </StyledLink>
        </Card>
      </List.Item>
    )}
  />
);

export default ActivityList;
