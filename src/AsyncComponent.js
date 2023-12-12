import React from 'react';

function AsyncComponent({}) {
  React.use(
    new Promise(resolve => {
      setTimeout(() => {
        resolve('Data loaded');
      }, 2000);
    })
  );
  return (
    <div>
      <h2>Async Component</h2>
    </div>
  );
}

export default AsyncComponent;
