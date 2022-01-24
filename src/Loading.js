import React from 'react';
import './index.css';
import cube from "./Cube-1s-200px.svg";
const Loading = () => {
  return <div className='mt-5'>
    <div className="logo-box m-auto">
      <img src={cube} alt="loading" />
    </div>
  </div>;
};

export default Loading;
