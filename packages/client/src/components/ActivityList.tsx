import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { List, Card, Rate, Tag } from 'antd';
import activityList from '../data/activities.json';

const Title = styled.h5``;
const Description = styled.p``;

const Rating = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const RatingCount = styled.span`
  font-size: 10px;
`;

const RateStars = styled(Rate)`
  font-size: 15px;
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
  "Šokiai": "magenta",
  "Sportas": "green",
  "Bedarbystė": "cyan"
}

const ActivityList = () => (
  <List
    size="large"
    pagination={{
      pageSize: 20
    }}
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 3,
      xl: 4,
      xxl: 4
    }}
    dataSource={activityList}
    renderItem={activity => (
      <List.Item>
        <StyledLink to={`activity/${activity.id}`}>
          <Card
            bordered={false}
            hoverable
            cover={<img alt="example" src={activity.image} />}
          >
            <Title>{activity.name}</Title>
            <Tag color={colors[activity.category]}>{activity.category}</Tag>
            <Description>{activity.description.substr(0, 50) + "..."}</Description>
            <Cost>${activity.price}/mėn</Cost>
            <Rating>
              <RateStars disabled defaultValue={activity.rating} />
              <RatingCount>{activity.ratingCount}</RatingCount>
            </Rating>
          </Card>
        </StyledLink>
      </List.Item>
    )}
  />
);

export default ActivityList;
