import React from 'react';
import PropTypes from 'prop-types';

export default function DefaultProfileImg({ imgText }) {
  return (
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="50" fill="#2ecc71" />
      <text
        x="50%"
        y="50%"
        alignmentBaseline="central"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="50"
        fill="#fff"
      >
        {imgText.charAt(0).toUpperCase()}
      </text>
    </svg>
  );
}

DefaultProfileImg.defaultProps = {
  imgText: '?',
};

DefaultProfileImg.propTypes = {
  imgText: PropTypes.string,
};
