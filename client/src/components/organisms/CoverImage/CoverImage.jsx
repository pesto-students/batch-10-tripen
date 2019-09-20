import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './CoverImage.css';

const Background =
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1542&q=80';

const CoverImage = () => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(`My Trip To Tokyo`);
  const [quote, setQuote] = useState(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.`,
  );
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleQuoteChange = (e) => {
    setQuote(e.target.value);
  };
  const buttonText = editMode ? 'Done' : 'Edit';
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="cover-image"
    >
      <div className="layer">
        <div className="flex-container">
          {editMode ? (
            <Form.Control
              type="text"
              placeholder="Enter Location"
              value={title}
              onChange={handleTitleChange}
            />
          ) : (
            <h1>{title}</h1>
          )}

          <blockquote className="blockquote text-center">
            {editMode ? (
              <Form.Control
                as="textarea"
                rows="3"
                value={quote}
                onChange={handleQuoteChange}
              />
            ) : (
              <p className="mb-0">{quote}</p>
            )}

            <footer className="blockquote-footer">
              by <cite title="Source Title">Andrew Jaiswal</cite>
            </footer>
          </blockquote>
          <Button variant="primary" onClick={toggleEditMode}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
