import React from 'react'

import {
  Card,
  CardContent,
  CardTitle,

  Grid,
  Row,
  Col,
} from 'former-kit'

const CardExample = () => (
  <Card>
    <CardTitle
      title="Lorem ipsum dolor sit amet"
    />
    <CardContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
      venenatis placerat lacus et pretium. Aenean porttitor mi odio, vel
      blandit nulla malesuada et. Duis a tellus quis est iaculis accumsan.
      In diam est, egestas eu lobortis eu, laoreet ut tortor. Sed mattis
      sapien vel malesuada sodales. Curabitur hendrerit purus sed ex
      feugiat hendrerit. Vivamus eleifend odio a congue consectetur.
    </CardContent>
  </Card>
)

const Forms = () => (
  <Grid>
    <Row flex>
      <Col tablet={12} palm={12}><CardExample /></Col>
      <Col tablet={12} palm={12}><CardExample /></Col>
    </Row>
    <Row>
      <Col tablet={12} palm={12}><CardExample /></Col>
    </Row>
    <Row flex>
      <Col tablet={12} palm={12}><CardExample /></Col>
      <Col tablet={12} palm={12}><CardExample /></Col>
      <Col tablet={12} palm={12}><CardExample /></Col>
    </Row>
    <Row flex>
      <Col tablet={12} palm={12}><CardExample /></Col>
      <Col tablet={12} palm={12}><CardExample /></Col>
      <Col tablet={12} palm={12}><CardExample /></Col>
      <Col tablet={12} palm={12}><CardExample /></Col>
    </Row>
    <Row flex>
      <Col tablet={12} palm={12}><CardExample /></Col>
      <Col tablet={12} palm={12}><CardExample /></Col>
    </Row>
  </Grid>
)

export default Forms
