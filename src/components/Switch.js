import React, { useContext } from 'react'
import { Theme } from '../App'

const Switch = ({ dark }) => {
  const theme = useContext(Theme)

  return (
    <div className="switch">
      <p className="switch-label">Dark Mode</p>
      <label className="switch-container">
        <input type="checkbox" onChange={() => theme(!dark)} />
        <span className="switch-slider"></span>
      </label>
    </div>
  )
}

export default Switch
