import React from 'react';
import SearchBar from './SearchBar';
import MocktailList from './MocktailList';
const Home = () => {
  return <>
    <div className="row">
      <div className='col-md-6 m-auto'>
        <SearchBar/>
      </div>
    </div>
    
    <MocktailList/>
  </>;
};

export default Home;
