import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Signup extends Component {
    constructor(){
        super();

        this.state = {
            redirect:null
        }
    }

    async createAccount(e){
        e.preventDefault()
        let res = await fetch('http://127.0.0.1:5000/auth/signup',{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                "username": e.target.username.value,
                "email": e.target.email.value,
                "password": e.target.password.value,
                "confirm_password": e.target.confirmPassword.value,
                "token": null,
                "token_expiration": null
            })
        })
        this.setState({ redirect :`/login/`})
    }

    render() {
        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="container my-5">
                <form onSubmit={(e) => this.createAccount(e)}>
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" name="username" placeholder="Username" />
                    <br></br>
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" name="email" placeholder="Email" />
                    <br></br>
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Password" />

                    <br></br>
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" />
                    <br></br> 
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                
            </div>
        )
    }
}
