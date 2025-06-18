import { Menu, MenuProps } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `overview nav ${key}`,
}));

const items: MenuProps['items'] = [
    {
        key: 'insight',
        label: <Link to="/overview">Insight</Link>,
    },
    {
        key: 'deepsearch',
        label: <Link to="/overview/deepsearch">Deep Search</Link>,
    }
]

const OverviewHeader: React.FC = () => {
    return (
        <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['insight']}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
        />
    )
}

export default OverviewHeader;