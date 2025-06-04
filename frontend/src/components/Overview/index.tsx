import { Card, Col, Divider, List, Row, Space, theme } from 'antd';
import React, { useState } from 'react';
import { Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { ArrowUpOutlined, EyeOutlined, FileFilled } from '@ant-design/icons';

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
          <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
            <Card title='Country'>
            </Card>

            <Card title='Reports at Risk'>
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