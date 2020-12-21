import React from 'react'
import { icons, toK } from '../helper/helperFunc'

import { ReactComponent as UpIcon } from '../images/icon-up.svg'
import { ReactComponent as DownIcon } from '../images/icon-down.svg'

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
