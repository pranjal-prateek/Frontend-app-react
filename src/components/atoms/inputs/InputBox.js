import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputBox = ({
  type,
  id,
  placeholder,
  value,
  onChange,
  required,
  className,
  regexPattern,
  errorMessage,
  isSearchBar, 
  crossButtonRequired, 
  onClickCross, 
  onKeyDown
}) => {
  const [error, setError] = useState(false);
  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (regexPattern && !inputValue.match(regexPattern)) {
      setError(true);
    } else {
      setError(false);
    }

    onChange(e);
  };

  return (
    <div className={isSearchBar ? 'inline-flex items-center border-2 rounded-3xl border-zinc-500' : ''}>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        required={required}
        className={`bg-transparent w-full ${className}`}
        onKeyDown={onKeyDown}
      />
      {isSearchBar && crossButtonRequired && (
        <span onClick={onClickCross} className="material-symbols-outlined text-gray-100 pr-2">
          close
        </span>
      )}
      {error && (
        <div className="error-message text-red-500">{errorMessage}</div>
      )}
    </div>
  );
};

InputBox.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  className: PropTypes.string,
  regexPattern: PropTypes.instanceOf(RegExp),
  errorMessage: PropTypes.string,
  isSearchBar: PropTypes.bool,
  crossButtonRequired: PropTypes.bool,
  onClickCross: PropTypes.func
};

export default InputBox;
