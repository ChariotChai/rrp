import { Card, Col, Divider, List, Row, Space, theme } from 'antd';
import React, { useState } from 'react';
import { Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { ArrowUpOutlined, EyeOutlined, FileFilled } from '@ant-design/icons';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import * as echarts from 'echarts/core';

const { Title, Text } = Typography;

function BriefCard({ icon, main, comment, trend }: {
  icon?: any, main?: any, comment?: any, trend?: any
}) {
  return (
    <Card
      variant='borderless'
      style={{
        margin: 0,
        padding: 0,
        width: "320px",
        height: "100px"
      }}
      styles={{
        body: {
          padding: "10px"
        }
      }}
    >
      <Row style={{
        margin: 0, padding: 0, display: 'flex',
        alignItems: 'center',
      }}>
        <Col style={{ margin: 0, padding: 0, alignContent: 'center' }}>
          <div style={{
            margin: 0, padding: 0,
            fontSize: '54px',
            height: '54px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {icon}
          </div>
        </Col>
        <Col style={{ margin: 0, paddingLeft: 10, display: 'flex', flexDirection: 'column' }}>
          <Text type="secondary" style={{ margin: 0, padding: 0, fontSize: "15px" }}>{comment}</Text>
          <Text
            style={{
              margin: 0, padding: 0,
              fontSize: "36px", height: "40px",
              display: "flex", "alignItems": "center"
            }}>
            {main}
          </Text>
        </Col>
      </Row>
      <Row style={{ margin: 0, padding: 0 }}>
        <Title level={5} type="success" style={{ margin: 0, padding: 0 }}>{trend}</Title>
      </Row>
    </Card>
  )
}

const Overview: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  function getVirtualData(year: string) {
    const now = new Date();
    const end = +now;
    const start = +new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
    const dayTime = 3600 * 24 * 1000;
    const data: [string, number][] = [];
    for (let time = start; time < end; time += dayTime) {
      data.push([
        echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
        Math.floor(Math.random() * 10000)
      ]);
    }
    return data;
  }

  const option: EChartsOption = {
    // title: {
    //   top: 30,
    //   left: 'center',
    //   text: 'Daily Reports Count'
    // },
    tooltip: {},
    visualMap: {
      min: 0,
      max: 10000,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      // top: 65
    },
    calendar: {
      top: 40,
      left: 30,
      right: 30,
      cellSize: ['auto', 13],
      range: '2025',
      itemStyle: {
        borderWidth: 0.5
      },
      yearLabel: { show: false }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: getVirtualData('2025')
    }
  };

  return (
    <Content>
      <Divider orientation="left">
        <Title level={4} style={{ margin: 0, padding: 0 }}>All Regulations</Title>
      </Divider>

      <Space direction="vertical" size="large" style={{ display: 'flex' }}>
        <Row>
          <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
            <BriefCard
              icon={<EyeOutlined />}
              main="18"
              comment="Obligations"
            />
            <BriefCard
              icon={<FileFilled />}
              main="168"
              comment={<>Reports</>}
              trend={<><ArrowUpOutlined />2 new</>}
            />
          </Space>
        </Row>
        <Row>
          <ReactECharts option={option} style={{ height: 160, width: 800 }} />

        </Row>
        <Row>
          <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>

            <Card title='Planning'>
              <Title level={4} style={{ margin: 0, padding: 0 }}>
                17 reports to submit in next 7 days
              </Title>
            </Card>

            <Card title='WIP'>
              <Title level={4} style={{ margin: 0, padding: 0 }}>
                6 new SNOW tickets working in progress
              </Title>
            </Card>

          </Space>
        </Row>
      </Space>

      <Divider orientation="left">
        <Title level={4} style={{ margin: 0, padding: 0 }}>My Dashboard</Title>
      </Divider>
      <Row>
        <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>

          <BriefCard
            icon={<EyeOutlined />}
            main="18"
            comment="Obligations"
          />

          <BriefCard
            icon={<FileFilled />}
            main="168"
            comment={<>Reports</>}
            trend={<><ArrowUpOutlined />2 new</>}
          />
        </Space>
      </Row>

    </Content >
  )
}

export default Overview;