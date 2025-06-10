import React, { useState } from 'react';
import { Menu, Input } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const MainMenu: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const filteredObligations = {
    key: 'obligations',
    label: (
      <>
        Obligations
        <div style={{ padding: '8px 16px 0' }}>
          <Input.Search
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </>
    ),
    type: 'group',
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
    ].filter(child =>
      typeof child.label === 'string' &&
      child.label.toLowerCase().includes(searchText.toLowerCase())
    )
  };

  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={["basic-functions", "basic-overview"]}
      items={[
        {
          key: 'basic-overview', icon: <UserOutlined />,
          label: <Link to="/overview">Overview</Link>,
        },
        {
          key: 'basic-access-mgmt', icon: <UserOutlined />,
          label: <Link to="/access-mgmt">Access</Link>,
        },
        {
          key: 'basic-new-obligation', icon: <UserOutlined />,
          label: <Link to="/bpmn-editor">New Obligation</Link>,
        },
        {
          ...filteredObligations,
          type: 'group'
        }
      ]}
    />
  );
};

export default MainMenu;