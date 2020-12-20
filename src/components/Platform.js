import React from 'react'
import '../sass/variables/variables.scss'

import { ReactComponent as FacebookIcon } from '../images/icon-facebook.svg'
import { ReactComponent as InstagramIcon } from '../images/icon-instagram.svg'
import { ReactComponent as TwitterIcon } from '../images/icon-twitter.svg'
import { ReactComponent as YoutubeIcon } from '../images/icon-youtube.svg'
import { ReactComponent as UpIcon } from '../images/icon-up.svg'
import { ReactComponent as DownIcon } from '../images/icon-down.svg'

const icons = (icon) => {
  switch (icon) {
    case 'facebook':
      return <FacebookIcon className="platform__icon" />
    case 'instagram':
      return <InstagramIcon className="platform__icon" />
    case 'twitter':
      return <TwitterIcon className="platform__icon" />
    case 'youtube':
      return <YoutubeIcon className="platform__icon" />
    default:
      return <FacebookIcon className="platform__icon" />
  }
}

const topB = (icon) => {
  switch (icon) {
    case 'facebook':
      return { borderColor: 'hsl(208, 92%, 53%)' }
    case 'instagram':
      return {
        borderImageSource:
          'linear-gradient(to left, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
      }
    case 'twitter':
      return { borderColor: 'hsl(203, 89%, 53%)' }
    case 'youtube':
      return { borderColor: 'hsl(348, 97%, 39%)' }
    default:
      return 'black'
  }
}

const toK = (num) => {
  if (num > 9999) {
    let k = num / 1000
    return `${k}K`
  }
  return num
}

const Platform = ({ platform, handle, followers, todayF }) => {
  return (
    <div className="platform" style={topB(platform)}>
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
            <p style={{ color: 'green' }}>{Math.abs(todayF)} Today</p>
          </>
        ) : (
          <>
            <DownIcon />
            <p style={{ color: 'red' }}>{Math.abs(todayF)} Today</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Platform
