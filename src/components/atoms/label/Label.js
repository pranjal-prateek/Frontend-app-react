import React from 'react'
import PropTypes from 'prop-types';
const Label = ({htmlFor,text}) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{text}</label>
    </div>
  )
}
Label.propTypes ={
    htmlFor: PropTypes.string,
    text: PropTypes.string
}
export default Label
