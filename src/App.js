import Switch from './components/Switch'
import Platform from './components/Platform'
import PLatformBottom from './components/PLatformBottom'
import data from './data/data.json'
import dataB from './data/dataB.json'
import { createContext, useState } from 'react'

export const Theme = createContext()

const totalF = (arr) => {
  const followersByMedia = []
  for (let i = 0; i < arr.length; i++) {
    followersByMedia.push(arr[i].followers)
  }

  return followersByMedia.reduce((acc, curr) => acc + curr)
}

function App() {
  const [dark, setDark] = useState('true')

  document.body.style.backgroundColor = dark ? '#1e202a' : '#ffffff'

  return (
    <Theme.Provider value={setDark}>
      <div className="App dark">
        <header className={`header ${dark && 'dark'}`}>
          <div className="header-sub">
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: {totalF(data)}</p>
          </div>
          <Switch dark={dark} />
        </header>
        <div className="platform-container">
          {data.map((x, index) => (
            <Platform
              platform={x.platform}
              handle={x.handle}
              followers={x.followers}
              todayF={x.todayF}
              dark={dark}
              key={index}
            />
          ))}
        </div>
        <h2 className={`Sub-Title ${dark && 'dark'}`}>Overview - Today</h2>
        <div className="platform-container">
          {dataB.map((x, index) => (
            <PLatformBottom
              title={x.title}
              icon={x.icon}
              count={x.count}
              perct={x.perct}
              key={index}
              dark={dark}
            />
          ))}
        </div>
      </div>
    </Theme.Provider>
  )
}

export default App
