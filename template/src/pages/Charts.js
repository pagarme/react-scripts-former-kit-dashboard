/* eslint-disable */

import React from 'react'
import {
  ResponsiveContainer,
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import {
  Card,
  CardContent,
  CardSection,
  CardTitle,
  Grid,
  Row,
  Col,
} from 'former-kit'

const dataBarChart = [
  {
    name: 'Dia 1',
    P: 2900,
    BPVS: 7100,
    A: 5000,
  },
  {
    name: 'Dia 2',
    P: 2500,
    A: 2500,
    BPVI: 2000,
  },
  {
    name: 'Dia 3',
    P: 3200,
    A: 5000,
    E: 2000,
  },
  {
    name: 'Dia 4',
    P: 8000,
    A: 7000,
  },
  {
    name: 'Dia 5',
    P: 2200,
    A: 1500,
    CB: 2000,
  },
  {
    name: 'Dia 6',
    P: 900,
    A: 900,
    R: 800,
  },
  {
    name: 'Dia 7',
    P: 7800,
    R: 200,
  },
  {
    name: 'Dia 8',
    P: 3200,
    B: 2000,
    CB: 2000,
  },
  {
    name: 'Dia 9',
    P: 10000,
    A: 5000,
    EP: 7000,
  },
  {
    name: 'Dia 10',
    P: 2900,
    BPVS: 7100,
    A: 5000,
  },
  {
    name: 'Dia 11',
    P: 2500,
    A: 2500,
    BPVI: 2000,
  },
  {
    name: 'Dia 12',
    P: 3200,
    A: 5000,
    E: 2000,
  },
  {
    name: 'Dia 13',
    P: 8000,
    A: 7000,
  },
  {
    name: 'Dia 14',
    P: 2200,
    A: 1500,
    CB: 2000,
  },
]

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

class StackedBarChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = { collapsed: false }
  }
  render() {
    return (
      <Card>
        <CardTitle title="Example 1" />
        <CardContent>
          <CardSection
            title="Bar chart"
            collapsedTitle="Bar chart"
            collapsed={this.state.collapsed}
            onTitleClick={collapsed => this.setState({ collapsed: !collapsed })}
          >
            <ResponsiveContainer width="100%" height={500}>
              <BarChart
                width={600}
                height={300}
                data={dataBarChart}
                maxBarSize={17}
              >
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickMargin={10}
                  tick={{ fontSize: 11 }}
                />
                <YAxis axisLine={false} height={50} tick={{ fontSize: 11 }} />
                <CartesianGrid stroke="#d7d7d7" vertical={false} />
                <Tooltip />
                <Legend iconType="square" iconSize={19} />
                <Bar dataKey="P" stackId="a" fill="#57be76" />
                <Bar dataKey="A" stackId="a" fill="#fcbb04" />
                <Bar dataKey="BPVS" stackId="a" fill="#56b2dc" />
                <Bar dataKey="CB" stackId="a" fill="#ed652b" />
                <Bar dataKey="E" stackId="a" fill="#662d91" />
                <Bar dataKey="EP" stackId="a" fill="#9773d9" />
                <Bar dataKey="R" stackId="a" fill="#e40400" />
                <Bar dataKey="BPVI" stackId="a" fill="#295790" />
              </BarChart>
            </ResponsiveContainer>
          </CardSection>
        </CardContent>
      </Card>
    )
  }
}

const SimpleLineChart = () => (
  <Card>
    <CardTitle title="Example 2" />
    <CardContent>
      <CardSection title="Line chart">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            <Line type="monotone" dataKey="amt" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </CardSection>
    </CardContent>
  </Card>
)

const StackedAreaChart = () => (
  <Card>
    <CardTitle title="Example 3" />
    <CardContent>
      <CardSection title="Area Chart">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart width={600} height={400} data={data}>
            <XAxis dataKey="name" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardSection>
    </CardContent>
  </Card>
)

const CardExample = () => (
  <Card>
    <CardTitle title="Lorem ipsum dolor sit amet" />
    <CardContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis
      placerat lacus et pretium. Aenean porttitor mi odio, vel blandit nulla
      malesuada et. Duis a tellus quis est iaculis accumsan. In diam est,
      egestas eu lobortis eu, laoreet ut tortor. Sed mattis sapien vel malesuada
      sodales. Curabitur hendrerit purus sed ex feugiat hendrerit. Vivamus
      eleifend odio a congue consectetur.
    </CardContent>
  </Card>
)

const Charts = () => (
  <Grid>
    <Row flex>
      <Col tablet={12} palm={12}>
        <StackedBarChart />
      </Col>
    </Row>
    <Row flex>
      <Col tablet={12} palm={12} desk={6}>
        <SimpleLineChart />
      </Col>
      <Col tablet={12} palm={12} desk={6}>
        <StackedAreaChart />
      </Col>
    </Row>
    <Row flex>
      <Col tablet={12} palm={12}>
        <CardExample />
      </Col>
      <Col tablet={12} palm={12}>
        <CardExample />
      </Col>
      <Col tablet={12} palm={12}>
        <CardExample />
      </Col>
    </Row>
  </Grid>
)

export default Charts
