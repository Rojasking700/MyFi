import React, { Component } from 'react'

export default class GlobalQoute extends Component {
    constructor(){
        super();
        this.state = {
            GlobalQuote : []
        }
    }

    async componentDidMount(){
        // console.log('match',this.props.match)
        let res = await fetch(`http://127.0.0.1:5000/info/globalqoute/${this.props.match}`, {method:'POST'});
        let globalqoute = await res.json()
        // console.log('global qoute', globalqoute)
        this.setState({GlobalQuote: globalqoute})
        // console.log('this state global qoute', this.state.GlobalQoute)


    }

    render() {
        const g = this.state.GlobalQuote;
        return (
            <div>
                
                <ol className="list-group card mb-3">
                <div className="card-header text-white bg-dark text-" >
                    <h5><strong>Sybmbol: </strong>{g.symbol}</h5>
                </div>
                <li className="list-group-item d-flex  justify-content-between align-items-start bg-light">
                    <div className="ms-2 me-auto ">
                    <div className="fw-bold ">Open Bid:</div>
                    {g.opens}
                    </div>
                </li>
                <li className="list-group-item d-flex  justify-content-between align-items-start bg-light">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">High:</div>
                    {g.high}
                    </div>
                </li>
                <li className="list-group-item d-flex  justify-content-between align-items-start bg-light">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Low:</div>
                    {g.low}
                    </div>
                </li>
                <li className="list-group-item d-flex  justify-content-between align-items-start bg-light">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Price:</div>
                    {g.price}
                    </div>
                </li>
                <li className="list-group-item d-flex  justify-content-between align-items-start bg-light">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Volume:</div>
                    {g.volume}
                    </div>
                </li>
                <li className="list-group-item d-flex  justify-content-between align-items-start bg-light">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Last Trading Day:</div>
                    {g.last_trading_day}
                    </div>
                </li>
                <li className="list-group-item d-flex  justify-content-between align-items-start bg-light">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Close:</div>
                    {g.prev_close}
                    </div>
                </li>
                <li className="list-group-item d-flex  justify-content-between align-items-start bg-light">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Change:</div>
                    {g.change}
                    </div>
                </li>
                <li className="list-group-item d-flex  justify-content-between align-items-start bg-light">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Change Percent:</div>
                    {g.change_per}
                    </div>
                </li>
                </ol>                

            </div>
        )
    }
}
