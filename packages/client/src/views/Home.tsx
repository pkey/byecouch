import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {
  IMarker,
  IActivity,
  ICategory,
  ICategorySelected
} from '../types/types';
import { Col, Container, Row } from 'react-bootstrap';
import { Spin } from 'antd';

import ActivityMap from './Map';
import Layout from '../components/Layout';
import Filters from '../components/Filters';
import Categories from '../components/Categories';
import ActivityList from '../components/ActivityList';

const OnlyMobile = styled(Col)`
  @media screen and (max-device-width: 760px) {
    display: none;
  }
  padding: 0px;
`;

interface IActivityResponse {
  data: IActivity[];
}

interface ICategoryResponse {
  data: ICategory[];
}

const Title = ({
  title,
  activityLength
}: {
  title: string;
  activityLength: number;
}) => (
  <h3 style={{ marginBottom: 10 }}>
    {title}
    <span style={{ fontSize: 14 }}> {activityLength}</span>
  </h3>
);

class ApiRequests {
  static getActivities = async (locations: any) => {
    try {
      const response: IActivityResponse = await axios.post(
        '/api/activities',
        {}
      );
      return response.data;
    } catch (err) {
      return err;
    }
  };

  static getCategories = async () => {
    try {
      const response: ICategoryResponse = await axios('/api/categories');
      return response.data;
    } catch (err) {
      return err;
    }
  };
}

const Home = () => {
  const [locations, setLocations] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activities, setActivities] = useState([]);
  const [filtredActivities, setFiltredActivities] = useState([]);

  const [isLoading, setLoading] = useState(true);
  const [markers, setMarkers] = useState([]);

  const iterateMarkers = (activites: IActivity[]): IMarker[] =>
    activites.map(({ id, spot }) => ({
      lat: spot.latitude,
      lng: spot.longitude,
      activityTitle: spot.name,
      id: id
    }));

  const iterateCategories = (categories: ICategory[]): ICategorySelected[] =>
    categories.map(category => ({
      ...category,
      isSelected: false
    }));

  useEffect(() => {
    const apiRequests = async () => {
      try {
        const [activites, categories] = await Promise.all([
          ApiRequests.getActivities(locations),
          ApiRequests.getCategories()
        ]);

        const parsedMarkers = iterateMarkers(activites);
        const parsedCategories = iterateCategories(categories);
        // @ts-ignore
        setMarkers(parsedMarkers);
        // @ts-ignore
        setCategories(parsedCategories);
        setActivities(activites);
        setFiltredActivities(activites);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    apiRequests();
  }, []);

  function selectCategory(index: number) {
    // @ts-ignore, FIXME: don't know why the ...categories works
    categories[index].isSelected = !categories[index].isSelected;
    setCategories([...categories]);

    const activities = selectCategoryActivities();
    setFiltredActivities([...activities]);
  }

  function selectCategoryActivities() {
    const hasSelected = categories.filter(
      (category: ICategorySelected) => category.isSelected
    );

    if (!hasSelected.length) return activities;
    else {
      const categoryHash: Map<string, boolean> = new Map();
      categories.forEach((category: ICategorySelected) => {
        if (category.isSelected)
          categoryHash.set(category.name, category.isSelected);
      });

      const filteredActivities = activities.filter((activity: IActivity) =>
        categoryHash.has(activity.category.name)
      );
      return filteredActivities;
    }
  }

  return (
    <Layout>
      <Row style={{ margin: 0 }}>
        <Col
          sm={12}
          md={6}
          xl={6}
          style={{
            height: 'calc(100vh - 100px)',
            overflowY: 'scroll',
            scrollbarWidth: 'none',
            overflowX: 'hidden',
            padding: 0
          }}
        >
          <Container>
            <Filters locations={locations} setLocations={setLocations} />

            {isLoading ? (
              <div style={{ textAlign: 'center', margin: 20 }}>
                <Spin tip="Kraunasi..." />
              </div>
            ) : (
              <>
                <Categories
                  categories={categories}
                  selectCategory={selectCategory}
                />
                <Title
                  activityLength={filtredActivities.length}
                  title="Veiklos"
                />
                <ActivityList
                  activities={filtredActivities}
                  categories={categories}
                />
              </>
            )}
          </Container>
        </Col>

        <OnlyMobile xs={0} sm={0} md={0} xl={6}>
          <ActivityMap markers={markers} />
        </OnlyMobile>
      </Row>
    </Layout>
  );
};

export default Home;
