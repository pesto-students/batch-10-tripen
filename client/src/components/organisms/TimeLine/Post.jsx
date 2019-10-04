import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Post = ({
  post, editMode,
}) => {
  const date = (new Date(post.displayTime));
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',

  };
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
  };
  return (
    <li>
      <time className="cbp_tmtime" dateTime={date}>
        <span>{date.toLocaleDateString('en-us', dateOptions)}</span>
        {' '}
        <span>{date.toLocaleTimeString('en-us', timeOptions)}</span>
      </time>
      <div className="cbp_tmlabel">
        {editMode
          ? <Form.Control size="lg" type="text" placeholder="Title..." value={post.title} />
          : <h2>{post.title}</h2>}
        {editMode
          ? <Form.Control as="textarea" rows="3" placeholder="Content..." value={post.content} />
          : (
            <p>
              {post.content}
            </p>
          )}

      </div>
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.node.isRequired,
  editMode: PropTypes.bool.isRequired,
};

export default Post;
