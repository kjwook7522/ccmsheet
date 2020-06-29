import React from 'react';
import { List, Divider, Card } from 'antd';
import queryString from 'query-string';
import './Search.css';
import SheetItem from '../components/SheetItem';

function Search() {
  const searchValue = queryString.parse(window.location.search).value;
  const testData = [1,2,3,4,5,6];

  return (
    <div className="search">
      <p>입력하신 "{searchValue}" (으)로 검색한 결과입니다.</p>
      <Divider style={{ borderTop: '1px solid #ddd' }} />
      <List
        style={{ color: '#eee' }}
        grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 4, xl: 4, xxl: 6 }}
        dataSource={testData}
        renderItem={item => (
          <List.Item>
            <SheetItem></SheetItem>
          </List.Item>
        )}
      />
    </div>
  );
}

export default Search;
