import React from 'react';

const LoadingIcon = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.373A8 8 0 0012 20v4c-6.627 0-12-5.373-12-12h4zm6 2.627A8 8 0 0020 12h4c0 6.627-5.373 12-12 12v-4zm2-10.373A8 8 0 0112 4V0c6.627 0 12 5.373 12 12h-4z"
    ></path>
  </svg>
);

export default LoadingIcon;
