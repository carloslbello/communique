import React from 'react';

const Loading = ({ loading }) => (
  <div id="loading-container" className={loading ? '' : 'hidden'}>
    <div id="loading" />
  </div>
);

export default Loading;
