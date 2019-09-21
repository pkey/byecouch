import React from 'react';
import styled from 'styled-components';

import { List, Tag, Card } from 'antd';
import dayList from '../data/days.json';

const Title = styled.h5``;
const Description = styled.p``;

const DayList = () => (
  <List
    size="large"
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 3,
      xl: 4,
      xxl: 4
    }}
    dataSource={dayList}
    renderItem={day => (
      <List.Item>
        <Card bordered={false}>
          <Title>{day.name}</Title>
          <Tag style={{ margin: '5px 0' }} color={day.busy ? 'red' : 'green'}>
            {day.busy ? 'Užimta' : 'Laisva'}
          </Tag>
          <Description>
            {day.time.from}h. - {day.time.to}h.
          </Description>
        </Card>
      </List.Item>
    )}
  />
);

export default DayList;
