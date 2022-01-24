import React from 'react';
import {Link} from 'react-router-dom';
const Error = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center mt-5' >
      <h2 >Oops not found!!</h2>
      <Link to="/" className="btn btn-danger">Go Back Home</Link>
    </div>);
};

export default Error;
