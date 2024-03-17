import React from 'react'

const Toast = ({text,color="bg-red-600"}) => {
  return (
    <div className={`fixed top-16 left-1/2 transform -translate-x-1/2  text-white px-5 py-3 rounded-md shadow-md z-50 opacity-90 transition-opacity duration-300 ${color}`}>
    <p>{text}</p>
  </div>
  )
}

export default Toast