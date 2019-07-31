import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Home, About } from './pages/'

function App(): React.ReactElement {
  return (
    <Router>
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>

          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
      </div>
    </Router>
  )
}

export default hot(App)
