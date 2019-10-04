import React from 'react';
import PropTypes from 'prop-types';
import './CoverImage.css';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CoverImage = ({
  bg, title, tagline, author, editMode, authorId,
}) => (
  <div style={{ backgroundImage: `url(${bg})` }} className="cover-image ">
    <div className="layer ">
      <div className="flex-container ">
        <div className="border border-primary bg-white p-4" style={{ borderRadius: '4px', opactiy: '0.5' }}>
          {editMode ? (
            <Form.Control size="lg" type="text" placeholder="Title..." value={title} />
          ) : (
            <h1>{title}</h1>
          )}

          <blockquote className="blockquote text-center ">
            {editMode ? (
              <Form.Control type="text" placeholder="Title..." value={tagline} />
            ) : (
              <p className="mb-0">{tagline}</p>
            )}

            <footer className="blockquote-footer">
            by
              {' '}
              <Link to={`/profile/${authorId}`}>
                <cite title={title}>{author}</cite>
              </Link>
            </footer>
          </blockquote>
        </div>
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
  authorId: PropTypes.string.isRequired,
};

export default CoverImage;
