import { ReactComponent as FacebookIcon } from '../images/icon-facebook.svg'
import { ReactComponent as InstagramIcon } from '../images/icon-instagram.svg'
import { ReactComponent as TwitterIcon } from '../images/icon-twitter.svg'
import { ReactComponent as YoutubeIcon } from '../images/icon-youtube.svg'

export const icons = (icon) => {
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

export const toK = (num) => {
  if (num > 9999) {
    let k = Math.floor(num / 1000)
    return `${k}k`
  }
  return num
}
