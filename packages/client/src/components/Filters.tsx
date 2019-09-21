import React from 'react';
import styled from 'styled-components';

import { DatePicker, Button, Popover, Slider } from 'antd';
import AdressForms from './AdressForms';

const Container = styled.div`
//   background-color: #fff;
  padding: 20px;
`;

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
 

const Filters = ({ locations, setLocations}: any) => (
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
      content={<Slider defaultValue={30} tooltipVisible />}
      trigger="click"
    >
      <Button style={{marginRight: 20}}>Kaina</Button>
    </Popover>
    <Popover
      placement="bottomLeft"
      title="Lokacijos"
      // @ts-ignore
      content={<AdressForms locations={locations} setLocations={setLocations}/>}
      trigger="click"
    >
      <Button>Lokacijos</Button>
    </Popover>
  </Container>
);

export default Filters;
