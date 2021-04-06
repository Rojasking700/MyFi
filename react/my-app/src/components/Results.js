import React, { Component } from 'react'

export default class Results extends Component {
    render() {
        const r = this.props.result;
        return (
            <div>
                {r.symbol}
            </div>
        )
    }
}
