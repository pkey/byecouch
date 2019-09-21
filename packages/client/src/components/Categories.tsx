import React from 'react';
import styled from 'styled-components'
import { List, Card } from 'antd';

import categories from '../data/categories.json';

const Category = styled(Card)`
    border-radius: 10px;
    // color: #fff;
`

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
      size="small"
      dataSource={categories}
      renderItem={category => (
        <List.Item >
          <Category hoverable>
            <span>{category.name}</span>
          </Category>
        </List.Item>
      )}
    />
  </>
);

export default Categories;
