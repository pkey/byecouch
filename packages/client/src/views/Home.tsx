import { Spin } from "antd";
import axios from "axios";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import ActivityList from "../components/ActivityList";
import Categories from "../components/Categories";
import Filters from "../components/Filters";
import Layout from "../components/Layout";
import ActivityMap from "./Map";

const OnlyMobile = styled(Col)`
  @media screen and (max-device-width: 760px) {
    display: none;
  }
`;

class Home extends Component {
    state = {
        activities: [],
        categories: [],
        locations: [],
        isLoading: true
    };
  markers: any = [];

  async componentDidMount() {
    const { locations } = this.state;
      
    const activitiesRes: any = await this.getActivities(locations)
    const typesRes = await axios('/api/categories');

    this.markers = [];
    for (let item of activitiesRes.data) {
      this.markers.push({
        lat: item.spot.latitude,
        lng: item.spot.longitude,
        activityTitle: item.spot.name,
        id: item.id
      });
    }
    this.setState({
      activities: activitiesRes.data,
      categories: typesRes.data,
      isLoading: false
    });
  }

  getActivities = async (locations: any) => {
    return  await axios.post('/api/activities', {
      locations
    });
  }

  setLocations = async (locations: any) => {
    this.setState({ locations })
    await this.getActivities(locations)
  }

  render() {
    const { activities, categories, isLoading, locations } = this.state;
    return (
      <Layout>
        <Row>
          <Col
            sm={12}
            md={6}
            xl={6}
            style={{
              height: "calc(100vh - 100px)",
              overflowY: "scroll",
              scrollbarWidth: "none",
              overflowX: "hidden"
            }}
          >
            <Container>
              <Filters locations={locations} setLocations={this.setLocations}/>

              {isLoading ? (
                <div style={{ textAlign: "center", margin: 20 }}>
                  <Spin tip="Kraunasi..." />
                </div>
              ) : (
                <>
                  <Categories categories={categories} />
                  <h3 style={{ marginBottom: 10 }}>
                    Veiklos
                    <span style={{ fontSize: 14 }}> ({activities.length})</span>
                  </h3>
                  <ActivityList
                    activities={activities}
                    categories={categories}
                  />
                </>
              )}
            </Container>
          </Col>

          <OnlyMobile xs={0} sm={0} md={0} xl={6}>
            <ActivityMap markers={this.markers} />
          </OnlyMobile>
        </Row>
      </Layout>
    );
  }
}
export default Home;
