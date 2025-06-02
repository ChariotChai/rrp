import React from 'react';
import { Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const MainMenu: React.FC = () => {
  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={[
        {
          key: "1",
          icon: <UserOutlined />,
          label: <Link to="/overview">Overview</Link>,
        },
        {
          key: "2",
          icon: <VideoCameraOutlined />,
          label: <Link to="/all-insight">Insight</Link>,
        },
        {
          key: "3",
          icon: <UploadOutlined />,
          label: <Link to="/page3">nav 3</Link>,
        },
      ]}
    />
  );
};

export default MainMenu;