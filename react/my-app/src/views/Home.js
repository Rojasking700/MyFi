import React, { Component } from 'react';

export default class Home extends Component {
    
    constructor(){
        super();
        this.state={
            stonk : [],
            myChart :[],
            keyword: null
        }
    }
    componentDidMount(){
        fetch(`http://localhost:5000/`)
        .then(res => res.json())
        .then(data => this.setState({stonk: data}))
        // .then(data => console.log(data))
        .catch(error => console.log(error))   
}


    render() {
        
        const s = this.state.stonk;
        // console.log(s)
        // console.log(s['01. symbol'])
        return (
            <div>
                <ul>
                    {/* <li>s {s}</li> */}
                    <li>symbol {s.symbol}</li>
                    <li>open {s.opens}</li>
                    <li>{s.high}</li>
                    <li>{s.low}</li>
                    <li>{s.price}</li>
                    <li>{s.volume}</li>
                    <li>{s.last_trading_day}</li>
                    <li>{s.prev_close}</li>
                    <li>{s.change}</li>
                    <li>{s.change_per}</li>
                </ul>

                <canvas></canvas>
                
            </div>
        )
    }
}
