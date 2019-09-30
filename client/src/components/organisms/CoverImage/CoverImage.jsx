import React, { useState } from 'react';
import './CoverImage.css';
import { Button, Form } from 'react-bootstrap';
import ImgDropAndCrop from '../../molecules/ImgDropAndCrop/ImgDropAndCrop';

const Background = 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1542&q=80';

const CoverImage = () => {
  const [timeline, setTimeline] = useState({
    bg: Background, title: 'My Trip To Tokyo', tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.', author: 'Ayush Jaiswal',
  });
  const {
    bg, title, tagline, author,
  } = timeline;

  const [edit, setEdit] = useState(false);

  const handleClick = () => setEdit(!edit);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };
  const handleChange = (e) => {
    setTimeline({ ...timeline, [e.target.name]: e.target.value });
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="cover-image"
    >
      <div className="layer">
        <div className="flex-container">
          <Button onClick={handleClick}>{edit ? 'Done' : 'Edit'}</Button>
          {edit ? <ImgDropAndCrop /> : null}
          {edit ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label hidden>Trip Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Trip Title..." value={title} onChange={handleChange} name="title" />
              </Form.Group>
            </Form>
          )
            : <h1>{title}</h1>}


          <blockquote className="blockquote text-center">
            {edit ? (
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label hidden>Trip Tagline</Form.Label>
                  <Form.Control type="text" placeholder="Enter Trip Tagline..." value={tagline} onChange={handleChange} name="tagline" />
                </Form.Group>
              </Form>
            )
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
};

export default CoverImage;
