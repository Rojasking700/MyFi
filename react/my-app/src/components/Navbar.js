import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'


export default class Navbar extends Component {

    constructor(){
        super();

        this.state = {
            redirect: null
        }
    }
    // async searchSymbol(e){
    //     e.preventDefault()
    //     let res = await fetch('http://127.0.0.1:5000/info/search', {
    //         method: 'POST',
    //         headers: { 
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             "keyword" : e.target.keyword.value
    //             // "keyword" : "tesco"
    //         })
    //     })
    //     this.setState({redirect : `/searchresults`})
    // }
    render() {
        if(this.props.redirect) {
            let redir = this.props.redirect
            console.log(redir)
            // this.setState({redirect: null})
            return <Redirect to={redir} />
        }
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
                        <a className="nav-link" href="/">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/">Action</a>
                        <a className="dropdown-item" href="/">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/">Disabled</a>
                    </li>
                    </ul>
                    </div>
                    
                    <form className="" onSubmit={(e) => this.props.searchSymbol(e)}>
                    <input className="form-control mr-sm-2" type="search" name="keyword" placeholder="Search symbol" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    
                </div>  
                    
                
                </nav>
                </div>
            // </div>
        )
    }
}
