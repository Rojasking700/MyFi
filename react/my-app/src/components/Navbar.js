import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom'


export default class Navbar extends Component {

    constructor(){
        super();

        this.state = {
            redirect: null,
            keyword: null,
            validToken: null
        }
    }

    async componentDidMount(){
        // console.log('mounted navbar',Date().toLocaleString());
        let validToken = await this.props.checkToken();
        // console.log('validToken',validToken)
        this.setState({'validToken': validToken})
        // console.log('this.state.validtoken',this.state.validToken)
        return validToken
    }


    
    searchSymbol() {
        // e.preventDefault();
    
        this.setState({
          keyword : document.getElementById('keyword').value
      });
    //   console.log("keyword",this.state.keyword)
    }
    
    render() {
        if(this.state.validToken === true){

            return (
                <div>
    
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="/">MyFi</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/searchresults">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={this.props.logout}>Logout</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li> */}
                        
                        </ul>
                        </div>
                        {/* onClick={(e) => this.props.searchSymbol(e)} */}
                        {/* <form className="row g-1" >
                        <div className="col-auto">
                            
                        </div>
                        <div className="col-auto">
                            <input className="form-control mr-sm-2" type="search" name="keyword" id="keyword" placeholder="Search symbol" aria-label="Search"/>
                            <Link className="btn btn-outline-primary my-2 my-sm-0 float-end" aria-current="page" type="submit" onClick={() => this.searchSymbol()} to={`/searchresults/${this.state.keyword}`}> */}
                                {/* <button className="btn btn-outline-primary my-2 my-sm-0 float-end" onClick={() => this.searchSymbol()} type="submit">search</button> */}
                            {/* </Link> */}
                            {/* <Link to={{
                                pathname: '/searchresults',
                                search: '?symbol=AAPL'
                            }}>     */}
                            
    
    
                                {/* <button className="btn btn-outline-primary my-2 my-sm-0 float-end" type="submit">TEST ME</button> */}
                            {/* </Link>                         */}
                        {/* </div>
                        </form> */}
                        
                    </div>  
                        
                    
                    </nav>
                    </div>
                // </div>
            )
        }else {
            return (
                
                <div>
    
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="/">MyFi</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/searchresults">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li> */}
                        
                        </ul>
                        </div>
                        {/* onClick={(e) => this.props.searchSymbol(e)} */}
                        {/* <form className="row g-1" >
                        <div className="col-auto">
                            
                        </div>
                        <div className="col-auto">
                            <input className="form-control mr-sm-2" type="search" name="keyword" id="keyword" placeholder="Search symbol" aria-label="Search"/>
                            <Link className="btn btn-outline-primary my-2 my-sm-0 float-end" aria-current="page" type="submit" onClick={() => this.searchSymbol()} to={`/searchresults/${this.state.keyword}`}> */}
                                {/* <button className="btn btn-outline-primary my-2 my-sm-0 float-end" onClick={() => this.searchSymbol()} type="submit">search</button> */}
                            {/* </Link> */}
                            {/* <Link to={{
                                pathname: '/searchresults',
                                search: '?symbol=AAPL'
                            }}>     */}
                            
    
    
                                {/* <button className="btn btn-outline-primary my-2 my-sm-0 float-end" type="submit">TEST ME</button> */}
                            {/* </Link>                         */}
                        {/* </div>
                        </form> */}
                        
                    </div>  
                        
                    
                    </nav>
                    </div>
                // </div>
            )
        }

    }
}
