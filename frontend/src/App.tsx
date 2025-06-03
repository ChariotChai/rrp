import React, { useState } from 'react';
import {
  UserOutlined,
} from '@ant-design/icons';
import { Layout, theme } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Overview from './components/Overview';
import OverviewHeader from './components/Overview/Header';
const { Header, Sider, Content } = Layout;

const AppContent: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ padding: 0, display: 'flex', alignItems: 'auto', backgroundColor: colorBgContainer }}>
        <div style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: colorBgContainer }}>
          <UserOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '8px' }} />
          <span style={{ color: '#1890ff', fontSize: '16px' }}>Regulatory Report Platform</span>
        </div>
        <Routes>
          <Route path="/overview" element={<OverviewHeader />} />
          <Route path="/access-mgmt" element={<div>Nav 2 内容区域</div>} />
          <Route path="/page3" element={<div>Nav 3 内容区域</div>} />
        </Routes>
      </Header>

      <Layout>

        <Sider
          trigger={null}
          style={{
            background: colorBgContainer
          }}
        >
          <div style={{ height: 'calc(100vh - 64px)', overflowY: 'auto' }}>
            <MainMenu />
          </div>
        </Sider>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            height: 'calc(100vh - 112px)',
            overflowY: 'auto',
          }}
        >
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/access-mgmt" element={<div>access management</div>} />
            <Route path="/page3" element={<div>Nav 3 内容区域</div>} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;