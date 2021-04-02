import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';

export default class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
        <div>
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
            </Switch>
          </main>
        </div>
      
    )
  }
}

// export default App;