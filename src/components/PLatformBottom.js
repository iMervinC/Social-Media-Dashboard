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

const toK = (num) => {
  if (num > 9999) {
    let k = Math.floor(num / 1000)
    return `${k}k`
  }
  return num
}

const PLatformBottom = ({ dark, title, icon, count, perct }) => {
  return (
    <div className={`platform platform__bottom ${dark && 'dark'}`}>
      <div className={`platform__bottom--top ${dark && 'dark'}`}>
        <p>{title}</p>
        {icons(icon)}
      </div>
      <div className={`platform__bottom--bot ${dark && 'dark'}`}>
        <h3>{toK(count)}</h3>
        <div className={`platform__bottom--bot__percent ${dark && 'dark'}`}>
          {perct > 1 ? <UpIcon /> : <DownIcon />}

          <p
            style={
              perct > 1
                ? { color: 'hsl(163, 72%, 41%)' }
                : { color: 'hsl(356, 69%, 56%)' }
            }
          >
            {Math.abs(perct)}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default PLatformBottom
