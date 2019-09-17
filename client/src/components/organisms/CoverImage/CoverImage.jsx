import React from 'react';
import './CoverImage.css';

const Background =
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1542&q=80';

const CoverImage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="cover-image"
    >
      <div className="layer">
        <div className="flex-container">
          <h1>My Trip To Tokyo</h1>
          <blockquote className="blockquote text-center">
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              by <cite title="Source Title">Andrew Jaiswal</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
