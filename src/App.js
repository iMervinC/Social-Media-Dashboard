import Switch from './components/Switch'
import Platform from './components/Platform'
import data from './data.json'
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
          {data.map((x) => (
            <Platform
              platform={x.platform}
              handle={x.handle}
              followers={x.followers}
              todayF={x.todayF}
              dark={dark}
            />
          ))}
        </div>
        <h2 className="Sub-Title">Overview - Today</h2>
      </div>
    </Theme.Provider>
  )
}

export default App
