import React, { Component, useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

import {
  Card,
  Comment,
  PageHeader,
  Avatar,
  Rate,
  Statistic,
  Col,
  Row,
  Icon,
  Tag, Spin
} from 'antd';

import activities from '../data/activities.json';
import { Container } from 'react-bootstrap';
import DayList from '../components/DayList';
import { ApiRequests } from "./Home";
import Categories from "../components/Categories";
import ActivityList from "../components/ActivityList";
import { IActivity, MapProps } from "../types/types";
import { act } from "react-dom/test-utils";

// let activity = activities[0];

const RateStars = styled(Rate)`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Comments = () => (
  <Comment
    author={<a>Han Solo</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    }
  />
);

let isLoading = true;

const types: any = {
  Rankdarbiai: 'red',
  Menai: 'cyan',
  Sportas: 'gold',
  Muzika: 'magenta',
  Tech: 'green',
  Kalbos: 'purple'
};

class Activity extends Component {
    state = {
        isLoading: true,
        activity: { } as IActivity
    };

    async componentDidMount() {
            try {
                const activites = await ApiRequests.getActivities({});
                console.log(activites)
                // @ts-ignore
                // @ts-ignore
                // setActivities(activites);
                const selectedActivity = activites.find(item => item.id === +this.props.match.params.id);

                console.log("HERE >> ")
                console.log(selectedActivity)
                this.setState({activity: selectedActivity, isLoading: false} );
                // @ts-ignore
                console.log(this.props.match.params.id);
                // console.log(activity);
                const wow = true;
                // setLoading(false);
                // console.log(this.props);
            } catch (err) {
                console.error(err);
            }

    }

    render() {

    // const [activities, setActivities] = useState([]);
    // const [selectedActivity, setActivity] = useState([]);
    // const [isLoading, setLoading] = useState(true);

    // useEffect(() => {

    // }, []);

    return (
        <Layout>
          <Container>
              {this.state.isLoading && this.state.activity ? (
                  <div style={{ textAlign: "center", margin: 20 }}>
                      <Spin tip="Kraunasi..." />
                  </div>
              ) : (

            <Card
                cover={
                  <img
                      style={{height: 200, objectFit: 'cover'}}
                      src={this.state.activity.photo}
                  />
                }
            >
              <RateStars disabled defaultValue={this.state.activity.rating}/>

              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{marginBottom: 20}}>
                  <h2>{this.state.activity.name}</h2>
                  <Tag color={this.state.activity.category.color}>{this.state.activity.category.name}</Tag>
                </div>

                <div>
                  <span style={{marginRight: 10}}>+ 370 (63) 21 2300</span>
                  <Icon spin={true} type="phone" theme="twoTone"/>
                </div>
              </div>

              <p>{activities[0].description}</p>

              <Row gutter={16}>
                <Col span={4}>
                  <Statistic title="Mėnesio kaina" value={this.state.activity.price + '$'}/>
                </Col>
                <Col span={4}>
                  <Statistic title="Dalyvių skaičius" value={9}/>
                </Col>
              </Row>

              <hr/>

              <div style={{marginTop: 40}}>
                <h6>Tvarkaraštis </h6>
                <DayList/>
              </div>

              <h4>Reviews</h4>
              <Comments/>
            </Card>
              )}
          </Container>
        </Layout>
    )
  }
};

export default Activity;
