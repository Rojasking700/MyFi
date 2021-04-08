import React, { Component } from 'react'
import GlobalQoute from '../components/GlobalQoute';

export default class QouteEndpoint extends Component {
    constructor(){
        super();
        this.state ={ 
            GlobalQuote : []
        }
    }

    async componentDidMount(){
        console.log(this.props.match.params.sym)
        let res = await fetch(`http://127.0.0.1:5000/info/globalqoute/${this.props.match.params.sym}`, {method:'POST'});
        let globalqoute = await res.json()
        this.setState({GlobalQuote: globalqoute})
        console.log('global qoute',this.state.GlobalQuote)
    }

    render() {
        const g = this.state.GlobalQuote
        console.log('g', g)
        return (
            <div>
                <div className="container">
                    <div className="row">
                        { <GlobalQoute key={g.symbol} GlobalQoute={g} symbol={g.symbol} opens={g.opens} high={g.high} low={g.low} price={g.price} volume={g.volume}
                         last_trading_day={g.last_trading_day} prev_close={g.prev_close} change={g.change} change_per={g.change_per} /> }
                        {/* {g.symbol} */}
                    </div>
                </div>
            </div>
        )
    }
}
