'use client';
import React, { Profiler, Suspense } from 'react';
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
  const onRender = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime);
  };
  console.log('App-render');
  return (
    <div>
      <h1>My App</h1>
      <Profiler id='App' onRender={onRender}>
        <Suspense fallback={<div>Loading...</div>}>
          <AsyncComponent />
        </Suspense>
      </Profiler>
    </div>
  );
}

export default App;
