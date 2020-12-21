import React from 'react'
import '../sass/variables/variables.scss'
import { icons, toK } from '../helper/helperFunc'

import { ReactComponent as UpIcon } from '../images/icon-up.svg'
import { ReactComponent as DownIcon } from '../images/icon-down.svg'

const topB = (icon) => {
  switch (icon) {
    case 'facebook':
      return { background: 'hsl(208, 92%, 53%)' }
    case 'instagram':
      return {
        background:
          'linear-gradient(to left, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
      }
    case 'twitter':
      return { background: 'hsl(203, 89%, 53%)' }
    case 'youtube':
      return { background: 'hsl(348, 97%, 39%)' }
    default:
      return 'black'
  }
}

const Platform = ({ platform, handle, followers, todayF, dark }) => {
  return (
    <div className={`platform ${dark && 'dark'}`}>
      <span className="platform__border" style={topB(platform)}></span>
      <div className="platform__handle">
        {icons(platform)}
        <p className="platform__handler">{handle}</p>
      </div>
      <div className="platform__followers">
        <h2>{toK(followers)}</h2>
        <p>FOLLOWERS</p>
      </div>
      <div className="platform__update">
        {todayF > 1 ? (
          <>
            <UpIcon />
            <p style={{ color: 'hsl(163, 72%, 41%)' }}>
              {Math.abs(todayF)} Today
            </p>
          </>
        ) : (
          <>
            <DownIcon />
            <p style={{ color: 'hsl(356, 69%, 56%)' }}>
              {Math.abs(todayF)} Today
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default Platform
