import React from 'react';
import PropTypes from 'prop-types';

const Post = ({
  post,
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
        <h2>{post.title}</h2>
        <p>
          {post.content}
        </p>
      </div>
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.node.isRequired,
};

export default Post;
