import React from 'react'

const Switch = () => {
  return (
    <div className="switch">
      <p className="switch-lable">Dark Mode</p>
      <label classname="switch-container">
        <input type="checkbox" />
        <span className="switch-slider"></span>
      </label>
    </div>
  )
}

export default Switch
