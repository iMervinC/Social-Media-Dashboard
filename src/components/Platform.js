import React from 'react'

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

const Platform = () => {
  return (
    <div className="platform">
      <div className="platform__handle">
        {icons('twitter')}
        <p className="platform__handler">@nathanf</p>
      </div>
      <div className="platform__followers">
        <h2>1987</h2>
        <p>FOLLOWERS</p>
      </div>
      <div className="platform__update">
        <UpIcon />
        <p>12 Today</p>
      </div>
    </div>
  )
}

export default Platform
