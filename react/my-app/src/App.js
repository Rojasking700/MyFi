import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Charts from './components/Chart';
import SearchResults from './views/SearchResults';
import { Redirect } from 'react-router-dom'
import QouteEndpoint from './views/QouteEndpoint';
import Signup from './views/Signup';
import Login from './views/Login';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      redirect: null,
      keyword: null,
      username : null,
      passord: null,
      token : null
    }
  }

  handleLogin = async(e) => {
    e.preventDefault();
    const username = e.target.username.value
    const password = e.target.password.value
    this.setState({
      username : username,
      password : password,
      redirect : '/'
    })
    let token = await this.getToken(username,password);
    this.setState({token : token['token']});
    console.log('log in', token)

  }

  getToken = async(username=this.state.username, password=this.state.password) => { 
    let res = await fetch('http://localhost:5000/tokens', { 
      method: 'POST',
      headers:{
        'Authorization': 'Basic ' + btoa(`${username}:${password}`)
      }
    })
    let token = await res.json();
    console.log('token', token['token'])
    return token
  }

  searchSymbol = async(e) =>{
    e.preventDefault();

    this.setState({
      // redirect1 : `/searchresults`,
      keyword : e.target.keyword.value
  });
  console.log("keyword",this.state.keyword)
}


  render() {
    return (
        <div>
          <Navbar searchSymbol={this.searchSymbol} redirect={this.state.redirect}  />
          <main>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/chart" render={() => <Charts/> } />
              <Route exact path="/searchresults" render={() => <SearchResults searchSymbol={this.searchSymbol} keyword={this.state.keyword}/> } />
              <Route exact path="/qouteendpoint/:sym" render={({match}) => <QouteEndpoint match={match} /> } />
              <Route exact path="/signup" render={() => <Signup /> } />
              <Route exact path="/login" render={() => <Login handleLogin={this.handleLogin} getToken={this.getToken} redirect={this.state.redirect} /> } />
            </Switch>
          </main>
        </div>
      
    )
  }
}

// export default App;