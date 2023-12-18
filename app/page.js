'use client';
// dashboard/page.js
import React from 'react';

async function getData() {
  const res = await fetch('http://127.0.0.1:3000/api/v1/article', {
    cache: 'no-store',
  });
  return await res.json();
}

export default function Page(a) {
  getData().then(res => {
    console.log(res);
  });
  const [state, setState] = React.useState(0);
  return (
    <div>
      app {state}
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}
