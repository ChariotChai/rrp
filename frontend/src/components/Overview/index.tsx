import { Card, Col, List, Row, Space, theme } from 'antd';
import React, { useState } from 'react';
import { Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { FileFilled } from '@ant-design/icons';

const { Title, Text } = Typography;

function BriefCard({ icon, main, comment, trend }: { icon: any, main: any, comment: any, trend: any }) {
  return (
    <Card
      variant='borderless'
      style={{
        margin: 0,
        padding: 0,
        width: "320px",
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
          <div style={{ margin: 0, padding: 0, fontSize: '54px' }}>
            {icon}
          </div>
        </Col>
        <Col style={{ margin: 0, padding: 0 }}>
          <Text type="secondary" style={{ margin: 0, padding: 0, fontSize: "15px" }}>{comment}</Text>
          <Title level={1} style={{ margin: 0, padding: 0, fontSize: "36px" }}>{main}</Title>
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
      <Row>
        <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>

          <BriefCard
            icon={<FileFilled />}
            main="18"
            comment="All Obligations"
            trend="&uarr; 2 new (recent week)"
          />

          <BriefCard icon={<FileFilled />} main="168" comment={<>Delivered Reports(recent week)</>} trend="&uarr; 2 new" />
        </Space>
      </Row>
      
    </Content >
  )
}

export default Overview;