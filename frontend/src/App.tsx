import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';

const { Header, Sider, Content } = Layout;

const AppContent: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          background: colorBgContainer
        }}
      >
        <div style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: colorBgContainer }}>
          <UserOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '8px' }} />
          {!collapsed && <span style={{ color: '#1890ff', fontSize: '16px' }}>Regularotry Report Platform</span>}
        </div>
        <MainMenu />
      </Sider>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </Header>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          height: 'calc(100vh - 112px)',
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Routes>
          <Route path="/overview" element={<div>Nav 1 内容区域</div>} />
          <Route path="/all-insight" element={<div>Nav 2 内容区域</div>} />
          <Route path="/page3" element={<div>Nav 3 内容区域</div>} />
        </Routes>
      </Content>
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