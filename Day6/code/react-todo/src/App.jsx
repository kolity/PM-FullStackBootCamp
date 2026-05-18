import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hero from './Hero'

function App() {

  return (

    <App className="App">
      <Hero />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
    </App>
  )
}

export default App
