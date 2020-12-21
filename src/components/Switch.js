import React, { useContext } from 'react'
import { Theme } from '../App'

const Switch = ({ dark }) => {
  const theme = useContext(Theme)

  return (
    <div className="switch">
      <p className="switch-label">Dark Mode</p>
      <input type="checkbox" id="switch" onChange={() => theme(!dark)} />
      <label htmlFor="switch">Toggle</label>
    </div>
  )
}

export default Switch
