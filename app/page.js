'use client';
import React, { Suspense } from 'react';
import AsyncComponent from '../src/AsyncComponent';

// 异步加载数据的函数
const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Data loaded');
    }, 2000);
  });
};
function App() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <AsyncComponent />
      </Suspense>
    </div>
  );
}

export default App;
