import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
    constructor(){
        super();

        this.state = {
            user: []
        }
    }

    render() {
        if(this.props.redirect) {
            return <Redirect to={this.props.redirect} />
        }
        return (
            <div className="container my-5">
                <form  onSubmit={(e) => this.props.handleLogin(e)}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" placeholder="Username"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>  
                </form>
            </div>
        )
    }
}
