import { List, Tag } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { ICategory, ICategorySelected } from '../types/types';

const Category: any = styled(Tag)`
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.43;
  text-align: center;
  padding: 5px;
  width: 100%;

  :hover {
    opacity: 1;
    cursor: pointer;
  }

  opacity: ${({ isSelected }: any) => (isSelected == true ? '1' : '0.6')};
`;

const Categories = ({ categories, selectCategory }: any) =>  (
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
      renderItem={(category: ICategorySelected, index: number) => (
        <List.Item>
          <Category
            isSelected={category.isSelected}
            color={category.color}
            onClick={() => selectCategory(index)}
          >
            <span>{category.name}</span>
          </Category>
        </List.Item>
      )}
    /> 
  ) 

export default Categories;
