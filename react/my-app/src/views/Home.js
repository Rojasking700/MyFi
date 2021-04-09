import React, { Component } from 'react';
import GlobalQoute from '../components/GlobalQoute';
import { Link } from 'react-router-dom';

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
        fetch(`http://127.0.0.1:5000/info/globalqoute/IBM`)
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
                <canvas></canvas>
                <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <Link className="" id="results" to={`/qouteendpoint/IBM`}>
                    <div class="col"><GlobalQoute match="IBM" /></div>
                </Link>
                <Link className="" id="results" to={`/qouteendpoint/SAIC`}>
                    <div class="col"><GlobalQoute match="SAIC" /></div>
                </Link>
                <Link className="" id="results" to={`/qouteendpoint/TSLA`}>
                    <div class="col"><GlobalQoute match="TSLA" /></div>
                </Link>
                <Link className="" id="results" to={`/qouteendpoint/AAPL`}>
                    <div class="col"><GlobalQoute match="AAPL" /></div>
                </Link>
                <Link className="" id="results" to={`/qouteendpoint/MSFT`}>
                    <div class="col"><GlobalQoute match="MSFT" /></div>
                </Link>
                <Link className="" id="results" to={`/qouteendpoint/INTC`}>
                    <div class="col"><GlobalQoute match="INTC" /></div>
                </Link>
                    
                </div>
                </div>                
            </div>
        )
    }
}
