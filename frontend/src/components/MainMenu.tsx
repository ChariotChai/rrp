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
          label: <Link to="/process-editor">Onboard New</Link>,
        },
        {
          key: 'obligations',
          label: 'Obligations',
          type: 'group',
          children: [
            {
              key: '5',
              label: 'Obligation 1',
              children: [
                {
                  key: '5-1',
                  label: <Link to="/report-detail/rpt11">Report 1-1</Link>,
                },
                {
                  key: '5-2',
                  label: <Link to="/report-detail/rpt12">Report 1-2</Link>,
                },
              ]
            },
            {
              key: '6',
              label: 'Obligation 2',
              children: []
            },
          ]
        }
        // {
        //   ...filteredObligations,
        //   type: 'group'
        // }
      ]}
    />
  );
};

export default MainMenu;