import React from 'react';
import styled from 'styled-components';
import { List, Card, Tag } from 'antd';

import categories from '../data/categories.json';

const Category: any = styled(Tag)`
  // background-color: #fff;
  padding: 5px;
  border-radius: 4px;
  width: 100%;
  text-align: center;
  // border: 1px solid rgb(220, 224, 224);
  font-size: 14px;
  line-height: 1.43;
  opacity: 0.6;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const types: any = {
  Rankdarbiai: 'red',
  Menai: 'cyan',
  Sportas: 'gold',
  Muzika: 'magenta',
  Tech: 'green',
  Kalbos: 'purple'
};

const Categories = () => (
  <>
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 3,
        xl: 4,
        xxl: 6
      }}
      style={{ margin: 20 }}
      size="small"
      dataSource={categories}
      renderItem={category => (
        <List.Item>
          <Category color={types[category.name]}>
            <span>{category.name}</span>
          </Category>
        </List.Item>
      )}
    />
  </>
);

export default Categories;
