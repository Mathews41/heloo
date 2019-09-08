import React, {Component} from 'react';
import './App.css';
import Nav from './Components/Nav/Nav'
import routes from './routes'

import 'reset-css'

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Nav/>
        {routes}
      </div>
    )
  }
}

export default App