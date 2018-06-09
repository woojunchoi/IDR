import React from 'react';
import { Route } from "react-router-dom";
import Partone from './Partone/Partone'
import Parttwo from './Parttwo/Parttwo'
import Home from './Home'


function App(){
  return (
      //Used React-Router to put part 1 and 2 together on one App
      <div className='container'>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/partone' render={() => <Partone />} />
          <Route exact path='/parttwo' render={() => <Parttwo />} />
      </div>
  )
}


export default App;