import React, { Component } from 'react'
import Results from '../components/Results';

export default class SearchResults extends Component {

    constructor(){
        super();

        this.state={
            results : null
        }
    }

    async componentDidMount() {
        console.log("search results mounted")
        console.log(this.props.keyword)
        let res = await fetch('http://127.0.0.1:5000/info/search', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "keyword" : this.props.keyword
                // "keyword" : "tesco"
            })
        });
        let results = await res.json()
        console.log("results JSON", results)
        this.setState({results: results})
        console.log("results", this.state.results)
    //     this.setState({
    //       redirect1 : `/searchresults`,
    //       keyword : e.target.keyword.value
    //   });
    }
    
    render() {

        if (Array.isArray(this.state.results)){
            console.log("true",this.state.results)
            return (
                <React.Fragment>
    
                    <div>
                        <div className="container">
                            <div className="row">
                                {this.state.results.map( r=> <Results key={r.symbol} result={r}  symbol={this.props.symbol}/> )}
                            </div>
                        </div>
                    </div>
                    
                </React.Fragment>
            )
        }else{
            console.log("false",this.state.results)
            return (
                <React.Fragment>
    
                    <div>
                        <div className="container">
                            <div className="row">
                                <h1>not available</h1>
                            </div>
                        </div>
                    </div>
                    
                </React.Fragment>
            )
        }
    }
}
