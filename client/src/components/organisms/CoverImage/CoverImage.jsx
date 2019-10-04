import React from 'react';
import PropTypes from 'prop-types';
import './CoverImage.css';
import { Form } from 'react-bootstrap';


const CoverImage = ({
  bg, title, tagline, author, editMode,
}) => (
  <div
    style={{ backgroundImage: `url(${bg})` }}
    className="cover-image"
  >
    <div className="layer">
      <div className="flex-container">
        {editMode
          ? <Form.Control size="lg" type="text" placeholder="Title..." value={title} />
          : <h1>{title}</h1>}

        <blockquote className="blockquote text-center">
          {editMode
            ? <Form.Control type="text" placeholder="Title..." value={tagline} />
            : (
              <p className="mb-0">
                {tagline}
              </p>
            )}

          <footer className="blockquote-footer">
              by
            {' '}
            <cite title="Source Title">{author}</cite>
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
  author: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
};

export default CoverImage;
