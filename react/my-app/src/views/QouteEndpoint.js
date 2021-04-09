import React, { Component } from 'react'
import GlobalQoute from '../components/GlobalQoute';
import Chart from '../components/Chart';

export default class QouteEndpoint extends Component {
    constructor(){
        super();
        this.state ={ 
            GlobalQuote : [],
            TimeChart: []
        }
    }

    async componentDidMount(){
        console.log(this.props.match.params.sym)
        let res = await fetch(`http://127.0.0.1:5000/info/globalqoute/${this.props.match.params.sym}`, {method:'POST'});
        let globalqoute = await res.json()
        this.setState({GlobalQuote: globalqoute})
        // console.log('global qoute',this.state.GlobalQuote)
        let res1 = await fetch(`http://127.0.0.1:5000/info/timeseries/MONTHLY_ADJUSTED/${this.props.match.params.sym}`, {methods:'POST'});
        let timechart = await res1.json()
        this.setState({TimeChart : timechart});
        console.log('time chart',this.state.TimeChart)

    }

    render() {
        const g = this.state.GlobalQuote
        const tc = this.state.TimeChart
        // console.log('g', g)
        return (
            <div>
                <div className="container my-5">
                    <div className="row">
                        
                        { <GlobalQoute key={g.symbol} GlobalQoute={g} symbol={g.symbol} opens={g.opens} high={g.high} low={g.low} price={g.price} volume={g.volume}
                         last_trading_day={g.last_trading_day} prev_close={g.prev_close} change={g.change} change_per={g.change_per} /> }
                        {/* {g.symbol} key={g.symbol} GlobalQoute={g} symbol={g.symbol}*/}
                        { <Chart match={this.props.match.params.sym} key={tc.symbol} TimeChart={tc} symbol={tc.symbol} opens={tc.opens} close={tc.close} time={tc.time} high={tc.high} info={tc.info} /> }
                    </div>
                </div>
            </div>
        )
    }
}
