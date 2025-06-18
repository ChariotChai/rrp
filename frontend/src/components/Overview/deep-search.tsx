import React, { useState } from 'react';
import { Input, Select, Button, Table } from 'antd';

interface SearchItem {
  id: string;
  name: string;
  category: string;
  status: string;
  date: string;
}

const DeepSearch: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');
  const [data, setData] = useState<SearchItem[]>([]);

  const categories = [
    { value: '', label: '所有分类' },
    { value: 'tech', label: '技术' },
    { value: 'business', label: '商业' },
    { value: 'design', label: '设计' },
  ];

  const statuses = [
    { value: '', label: '所有状态' },
    { value: 'active', label: '活跃' },
    { value: 'inactive', label: '未活跃' },
    { value: 'pending', label: '待处理' },
  ];

  const handleSearch = () => {
    // 这里应该是API调用获取搜索结果
    // 模拟数据
    const mockData: SearchItem[] = [
      {
        id: '1',
        name: '示例项目1',
        category: 'tech',
        status: 'active',
        date: '2023-01-01',
      },
      {
        id: '2',
        name: '示例项目2',
        category: 'business',
        status: 'inactive',
        date: '2023-02-01',
      },
    ];
    
    setData(mockData.filter(item => {
      return (
        item.name.includes(keyword) &&
        (category === '' || item.category === category) &&
        (status === '' || item.status === status)
      );
    }));
  };

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '分类',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  return (
    <div className="deep-search-container">
      <div className="search-filters">
        <Input
          placeholder="输入关键字搜索"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          style={{ width: 200, marginRight: 16 }}
        />
        <Select
          placeholder="选择分类"
          options={categories}
          value={category}
          onChange={setCategory}
          style={{ width: 150, marginRight: 16 }}
        />
        <Select
          placeholder="选择状态"
          options={statuses}
          value={status}
          onChange={setStatus}
          style={{ width: 150, marginRight: 16 }}
        />
        <Button type="primary" onClick={handleSearch}>
          搜索
        </Button>
      </div>
      <Table
        dataSource={data}
        columns={columns}
        rowKey="id"
        style={{ marginTop: 24 }}
      />
    </div>
  );
};

export default DeepSearch;