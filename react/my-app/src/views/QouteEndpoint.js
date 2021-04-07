import React, { Component } from 'react'

export default class QouteEndpoint extends Component {

    render() {
        console.log(this.props.match.params.sym)
        return (
            <div>
                <div className="container">
                QouteEndpoint {this.props.match.params.sym}
                </div>
            </div>
        )
    }
}
