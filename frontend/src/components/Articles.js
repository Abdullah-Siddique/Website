// Articles.js
import React from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
  return (

<div>
      <h2 className="center">Articles</h2>
      {/* Your articles content */}
      <div className="go-back-container">
        <Link to="/" className="go-back-link">Go Back</Link>
      </div>
    </div>
  );
};

export default Articles;
