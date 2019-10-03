import React from 'react';
import PropTypes from 'prop-types';
import './CoverImage.css';


const CoverImage = ({ bg, title, tagline }) => (
  <div
    style={{ backgroundImage: `url(${bg})` }}
    className="cover-image"
  >
    <div className="layer">
      <div className="flex-container">
        <h1>{title}</h1>
        <blockquote className="blockquote text-center">
          <p className="mb-0">
            {tagline}
          </p>
          <footer className="blockquote-footer">
              by
            {' '}
            <cite title="Source Title">Andrew Jaiswal</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
);

CoverImage.propTypes = {
  bg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
};

export default CoverImage;
