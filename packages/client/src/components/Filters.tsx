import React from 'react';
import styled from 'styled-components';

import { DatePicker, Button, Popover } from 'antd';

const Container = styled.div`
//   background-color: #fff;
  padding: 20px;
`;

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
 

const Filters = () => (
  <Container>
    <Popover
      placement="bottomLeft"
      title="Datos"
      content={<RangePicker />}
      trigger="click"
    >
      <Button style={{marginRight: 20}}>Datos</Button>
    </Popover>
    <Popover
      placement="bottomLeft"
      title="Kaina"
      content={<div />}
      trigger="click"
    >
      <Button>Kaina</Button>
    </Popover>
  </Container>
);

export default Filters;
