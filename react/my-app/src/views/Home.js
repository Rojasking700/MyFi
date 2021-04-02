import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            stonk : []
        }
    }
    componentDidMount(){
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo`)
        .then(res => res.json())
        .then(data => this.setState({stonk: data['Global Quote']}))
        // .then(data => console.log(data))
        .catch(error => console.log(error))
    }
    render() {
        const s = this.state.stonk;
        console.log(s)
        console.log(s['01. symbol'])
        return (
            <div>
                <ul>
                    <li>symbol {s['01. symbol']}</li>
                    <li>open {s['02. open']}</li>
                    <li>{s['03. high']}</li>
                    <li>{s['04. low']}</li>
                    <li>{s['05. price']}</li>
                    <li>{s['06. volume']}</li>
                    <li>{s['07. latest trading day']}</li>
                    <li>{s['08. previous close']}</li>
                    <li>{s['09. change']}</li>
                    <li>{s['10. change percent']}</li>
                </ul>
            </div>
        )
    }
}
