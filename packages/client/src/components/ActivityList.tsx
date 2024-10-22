import { Card, List, Rate, Tag } from "antd";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IActivity } from "../types/types";

const Title = styled.h5``;
const Description = styled.p`
  font-size: 12px;
`;

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
  font-size: 15px;
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const MobileCard = styled(Card)`
  width: 100%;
  height: 200px;

  @media screen and (max-device-width: 760px) {
    height: auto;
  }
`;
const MobileCol = styled(Col)`
  margin: 15px 20px;
  padding: 0px;

  @media screen and (max-device-width: 760px) {
    height: auto;
    padding: 10px;
  }
`;

const ActivityList = ({ activities, setCenter }: any) => {
  console.log(activities);
  return (
    <Container>
      <List
        size="large"
        pagination={{
          pageSize: 10
        }}
        dataSource={activities}
        renderItem={(activity: IActivity) => (
          <List.Item
            onMouseEnter={() => {
              const newCenter = {
                lat: Number(activity.spot.latitude),
                lng: Number(activity.spot.longitude)
              };

              console.log(newCenter);
              setCenter(Object.assign(newCenter, {}));
            }}
            style={{ padding: 20 }}
          >
            <MobileCard hoverable bodyStyle={{ padding: 0 }}>
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
                  <MobileCol xs={0} sm={6}>
                    <span style={{ fontSize: 12 }}>
                      {activity.spot.name || ""} - {activity.spot.address || ""}
                    </span>
                    <Title>{activity.name}</Title>
                    <Description>
                      {!activity.description
                        ? ""
                        : activity.description.substr(0, 40) + "..."}
                    </Description>
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
                  </MobileCol>
                </Row>
              </StyledLink>
            </MobileCard>
          </List.Item>
        )}
      />
    </Container>
  );
};

export default ActivityList;
