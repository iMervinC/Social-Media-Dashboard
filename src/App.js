import Switch from './components/Switch'
import Platform from './components/Platform'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-sub">
          <h1>Social Media Dashboard</h1>
          <p>Total Followers:</p>
        </div>
        <Switch />
      </header>
      <div className="platform-container">
        <Platform />
        <Platform />
        <Platform />
        <Platform />
      </div>
      <h2 className="Sub-Title">Overview - Today</h2>
    </div>
  )
}

export default App
