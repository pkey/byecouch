import { Card, List, Rate, Tag } from "antd";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h5``;
const Description = styled.p``;

const Rating = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px;
`;

const RatingCount = styled.span`
  font-size: 10px;
`;

const RateStars = styled(Rate)`
  font-size: 20px;
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
 

const ActivityList = ({ activities }: any) => {

  console.log(activities)
  return (
    <Container>
    <List
      size="large"
      pagination={{
        pageSize: 10
      }}
      dataSource={activities}
      renderItem={(activity: any) => (
        <List.Item style={{ padding: 20 }}>
          <Card
            hoverable
            style={{ height: 200, width: "100%" }}
            bodyStyle={{ padding: 0 }}
          >
            <StyledLink to={`activity/${activity.id}`}>
              <Row>
                <Col xs={0} sm={4} style={{ padding: 0 }}>
                  <img
                    src={
                      activity.photo
                        ? activity.photo
                        : `https://picsum.photos/seed/${activity.id}/200/300`
                    }
                    style={{
                      height: "200px",
                      width: "100%",
                      borderRadius: 10,
                      padding: 5,
                      objectFit: "cover"
                    }}
                  />
                </Col>
                <Col xs={0} sm={6} style={{ margin: "15px 20px", padding: 0 }}>
                  <span style={{ fontSize: 12 }}>
                    {activity.spot.name || ""} - {activity.spot.address  || ""}
                  </span>
                  <Title>{activity.name}</Title>
                  <Description>{activity.description}</Description>
                  <Rating>
                    <RateStars
                      disabled
                      defaultValue={
                        activity.rating !== 0
                          ? activity.rating
                          : Math.round(Math.random() * 10 - 5) + 1
                      }
                    />
                    <RatingCount>
                      {activity.ratingCount !== 0
                        ? activity.ratingCount
                        : Math.round(Math.random() * 100) + 10}
                    </RatingCount>
                  </Rating>
                  <span style={{ marginRight: 20 }}>
                    {activity.price} $/mėn
                  </span>
                  <Tag color={activity.category.color}>
                    {activity.category.name}
                  </Tag>
                </Col>
              </Row>
            </StyledLink>
          </Card>
        </List.Item>
      )}
    />
  </Container>
  )
}

  
export default ActivityList;
