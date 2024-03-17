import React from 'react';
import PropTypes from 'prop-types';
import LoadingIcon from '../../../icons/LoadingIcon'; 

const Buttons = ({ text, onClick, type, disabled, style, showLoader }) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={`relative ${disabled ? 'cursor-not-allowed opacity-30' : ''} bg-blue-500 text-black font-semibold py-2 px-4 border border-gray-400 rounded ${style}`}
      >
        {showLoader && (
          <span className="absolute inset-0 flex items-center text-white justify-end pr-5">
            <LoadingIcon />
          </span>
        )}
        {text}
      </button>
    </div>
  );
};

Buttons.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.string
};

export default Buttons;
