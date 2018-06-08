import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Partone from './Partone/Partone'
import Parttwo from './Parttwo/Parttwo'
import Home from './Home'


class App extends Component{
  constructor(props) {
    super(props)
  }

  render() {
  
  return (
      <div className='container'>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/partone' render={() => <Partone />} />
          <Route exact path='/parttwo' render={() => <Parttwo />} />

      </div>
  )
}
}

export default App;