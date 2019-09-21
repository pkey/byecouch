import React from 'react'
import Layout from '../components/Layout'
import { Card } from 'antd'

import activities from '../data/activities.json'
import { Container } from 'react-bootstrap'

const activity = activities[0]

const Activity = () => (
    <Layout>
        <Container>
            <Card>
            <h6>{activity.name}</h6>
            </Card>
           

        </Container>
    </Layout>
)

export default Activity;