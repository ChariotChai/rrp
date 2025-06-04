import { Menu, MenuProps } from 'antd';
import React, { useState } from 'react';
const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `overview nav ${key}`,
}));

const items: MenuProps['items'] = [
    {
        key: 'insight',
        label: 'Insight',
    },
    {
        key: 'deepsearch',
        label: 'Deep Search',
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