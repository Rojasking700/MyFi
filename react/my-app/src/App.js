import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Charts from './components/Chart';
import SearchResults from './views/SearchResults';
import { Redirect } from 'react-router-dom'

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      redirect1: null,
      keyword: null
    }
  }


  searchSymbol = async(e) =>{
    e.preventDefault();
    // let res = await fetch('http://127.0.0.1:5000/info/search', {
    //     method: 'POST',
    //     headers: { 
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         "keyword" : e.target.keyword.value
    //         // "keyword" : "tesco"
    //     })
    // });
    this.setState({
      redirect1 : `/searchresults`,
      keyword : e.target.keyword.value
  });
}


  render() {
    return (
        <div>
          <Navbar searchSymbol={this.searchSymbol} redirect={this.state.redirect1}  />
          <main>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/chart" render={() => <Charts/> } />
              <Route exact path="/searchresults" render={() => <SearchResults searchSymbol={this.searchSymbol} keyword={this.state.keyword}/> } />
            </Switch>
          </main>
        </div>
      
    )
  }
}

// export default App;