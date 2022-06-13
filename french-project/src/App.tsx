import { useState } from 'react'
import logo from './logo.svg'
import favicon from './favicon.svg'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Page2 from './pages/page2'
import Home from './pages/homepage'
import { Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Geography from './pages/geography'
import Economy from './pages/economy'
import Culture from './pages/culture'
import Language from './pages/language'
import Tourism from './pages/tourism'
import WhyOccitanie from './pages/whyoccitanie'



function App() {
  const [count, setCount] = useState(0)
  
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/geography' element={<Geography/>} />
        <Route path='/economy' element={<Economy />} />
        <Route path='/culture' element={<Culture/>} />
        <Route path='/language' element={<Language/>} />
        <Route path='/tourism' element={<Tourism/>} />
        <Route path='/why-to-go' element={<WhyOccitanie/>} />
    </Routes>
    </Router>
  );
}
  
export default App;

/*
<div className="App">
      <header className="App-header">
        <span>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={favicon} className="App-logo" alt="logo" />
        </span>
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
*/

