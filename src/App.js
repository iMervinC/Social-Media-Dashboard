import Switch from './components/Switch'
import Platform from './components/Platform'
import data from './data.json'
import { createContext, useState } from 'react'

export const Theme = createContext()
function App() {
  const [dark, setDark] = useState('true')

  return (
    <Theme.Provider value={setDark}>
      <div className="App">
        <header className="header">
          <div className="header-sub">
            <h1>Social Media Dashboard</h1>
            <p>Total Followers:</p>
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
            />
          ))}
        </div>
        <h2 className="Sub-Title">Overview - Today</h2>
      </div>
    </Theme.Provider>
  )
}

export default App
