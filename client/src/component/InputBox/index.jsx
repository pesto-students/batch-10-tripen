import React from 'react';
import PropTypes from 'prop-types';

const InputBox = ({
  inputClassNames,
  appendText,
  prependText,
  ariaLabel,
  value,
  inputType,
  marginClass,
  onChangeHandler,
  className,
  placeholder,
  size,
}) => (
  <div className={`input-group ${marginClass} ${className} ${`input-group-${size}`} `}>
    {prependText ? (
      <div className="input-group-prepend">
        <span className="input-group-text">{prependText}</span>
      </div>
    ) : null}
    <input
      type={inputType}
      className={`form-control ${inputClassNames}`}
      aria-label={ariaLabel}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
    />
    {appendText ? (
      <div className="input-group-append">
        <span className="input-group-text">{appendText}</span>
      </div>
    ) : null}
  </div>
);
InputBox.defaultProps = {
  appendText: null,
  prependText: null,
  inputType: ' text ',
  marginClass: ' mb-3 ',
  inputClassNames: '',
  className: '',
  size: 'sm',
  placeholder: '',
};
InputBox.propTypes = {
  appendText: PropTypes.string,
  prependText: PropTypes.string,
  inputType: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputClassNames: PropTypes.string,
  marginClass: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  placeholder: PropTypes.string,
};

export default InputBox;
